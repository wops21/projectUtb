<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Mail\Mailable;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class AuthController extends Controller
{
    //
    public function profile(Request $request)
    {
        if ($request->user()) {
            return response()->json($request->user(), 200);
        }

        return response()->json([
            'message' => 'Not loggedin',
            'status_code' => 500
        ], 500);
    }
    public function index(){
        $users = User::all();
        return response()->json($users,200);
    }
    public function register(Request $request)
    {
        $request->validate([
            'nombres' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();
        $user->id_carrera = $request->id_carrera;
        $user->nombres = $request->nombres;
        $user->apellidoPaterno = $request->apellidoPaterno;
        $user->apellidoMaterno = $request->apellidoMaterno;
        $user->email = $request->email;
        $user->role = $request->role;
        $user->password = bcrypt($request->password);

        if ($user->save()) {
            return response()->json([
                'message' => 'User created successfully!',
                'status_code' => 201
            ], 201);
        } else {
            return response()->json([
                'message' => 'Some errorr occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'message' => '
                Identificación de usuario o contraseña incorrectas',
                'status_code' => 401
            ], 401);
        }

        $user = $request->user();

        switch ($user) {
            case ($user->role == 'user'):
                $tokenData = $user->createToken('Personal Access Token', ['user']);
                break;
            case ($user->role == 'administratorMain'):
                $tokenData = $user->createToken('Personal Access Token', ['administratorMain']);
                break;
            case ($user->role == 'administratorMainSem'):
                $tokenData = $user->createToken('Personal Access Token', ['administratorMainSem']);
                break;
            case ($user->role == 'administratorSem'):
                $tokenData = $user->createToken('Personal Access Token', ['administratorSem']);
                break;
            default:
                return 'error';
        };
        $token = $tokenData->token;

        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save()) {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ], 500);
        }
    }


    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully!',
            'status_code' => 200
        ], 200);
    }
    public function resetPasswordRequest(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $user = User::where('email', $request->email)->first();

        if (empty($user)) {
            return response()->json([
                'message' => 'No pudimos encontrar tu cuenta, verifica por favor',
                'status_code' => 404
            ], 404);
        } else {
            $random = rand(111111, 999999);

            $user->verification_code = $random;
            if ($user->save()) {
                $userData = array(
                    'email' => $user->email,
                    'full_name' => $user->nombres,
                    'random' => $random
                );

                // Enviar el correo electrónico con el código QR adjunto
                Mail::send('emails.reset_password', $userData, function ($message) use ($userData) {
                    //     $message->from('no-reply@laravel.vue.learning', 'Password Request');
                    // $message->sender('john@johndoe.com', 'John Doe');
                    $message->to($userData['email'], $userData['full_name']);
                    // $message->cc('john@johndoe.com', 'John Doe');
                    // $message->bcc('john@johndoe.com', 'John Doe');
                    // $message->replyTo('john@johndoe.com', 'John Doe');
                    $message->subject('Solicitud de restablecimiento de contraseña');
                    // $message->priority(3);
                    // $message->attach('pathToFile');
                });


                if (Mail::failures()) {
                    return response()->json([
                        'message' => 'Se ha producido algún error, inténtelo de nuevo',
                        'status_code' => 500
                    ], 500);
                } else {
                    return response()->json([
                        'message' => 'Hemos enviado un código de verificación a tu dirección de correo electrónico',
                        'status_code' => 200
                    ], 200);
                }
            } else {
                return response()->json([
                    'message' => 'Se ha producido algún error, inténtelo de nuevo',
                    'status_code' => 500
                ], 500);
            }
        }
    }

    public function resetPassword(Request $request)
    {

        $request->validate(['email' => 'required|email',    'verification_code' => 'required|integer',  
          'password' => 'required|confirmed|min:6',],
           ['verification_code.required' => 'El código de verificación es obligatorio.',  
             'verification_code.integer' => 'El código de verificación debe ser un número entero.', 
                'password.required' => 'La contraseña es obligatoria.', 
                   'password.confirmed' => 'La confirmación de la contraseña no coincide.', 
                      'password.min' => 'La longitud mínima de la contraseña es :min caracteres.',]);

        $user = User::where('email', $request->email)->where('verification_code', $request->verification_code)->first();
        if (!$user) {
            return response()->json([
                'message' => 'Usuario no encontrado o Código no válido',
                'status_code' => 401
            ], 401);
        } else {
            $user->password = bcrypt(trim($request->password));
            $user->verification_code = Null;

            if ($user->save()) {
                return response()->json([
                    'message' => 'Password updated successfully!',
                    'status_code' => 200
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Some error occurred, Please try again',
                    'status_code' => 500
                ], 500);
            }
        }
    }
}
