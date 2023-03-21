<?php

namespace App\Http\Controllers;

use App\Models\Asignacion;
use App\Models\AsignacionTribunal;
use App\Models\Estudiante;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class AsignacionController extends Controller
{

    public function index()
    {
        $asignacion = AsignacionTribunal::with('relacionTribunal', 'relacionEstudiante')->where('asiEstado', '1')->when(request('carrera'), function ($query) {
            $query->whereHas('relacionEstudiante', function ($query) {
                $query->where('id_carrera', 'like', '%' . request('search') . '%');
            });
        })->when(request('search'), function ($query) {
            $query->whereHas('relacionEstudiante', function ($query) {
                $query->where('esPaterno', 'like', '%' . request('search') . '%')->orwhere('esMaterno', 'like', '%' . request('search') . '%');
            });
        })->where('cartaRespuesta', 'pendiente')->orWhere('cartaEnvio','pendiente')->orderBy('id', 'desc')->paginate(8);

        return response()->json($asignacion, 200);
    }
    public function filtroAsignacion()
    {
        $asignacion = AsignacionTribunal::with('relacionTribunal', 'relacionEstudiante')->when(request('search'), function ($query) {
            $query->whereHas('relacionEstudiante', function ($query) {
                $query->where('esPaterno', 'like', '%' . request('search') . '%')->orwhere('esMaterno', 'like', '%' . request('search') . '%');
            });
        })->when(request('carrera'), function ($query) {
            $query->whereHas('relacionEstudiante', function ($q) {
                $q->where('id_carrera', 'like', '%' . request('carrera') . '%');
            });
        })->where('asiEstado', '1')->where('cartaRespuesta', 'pendiente')->orderBy('id', 'desc')->paginate(3);

        return response()->json($asignacion, 200);
    }
    public function asignacionAprobada()
    {
        $asignacion = AsignacionTribunal::with('relacionTribunal', 'relacionEstudiante')->when(request('search'), function ($query) {
            $query->whereHas('relacionEstudiante', function ($query) {
                $query->where('esNombres', 'like', '%' . request('search') . '%')->orwhere('esPaterno', 'like', '%' . request('search') . '%');
            })->orWhereHas('relacionTribunal', function ($query) {
                $query->where('docNombre', 'like', '%' . request('search') . '%')->orwhere('docPaterno', 'like', '%' . request('search') . '%');
            });
        })->where('cartaRespuesta', 'completado')->where('cartaEnvio', 'completado')->paginate(8);

        return response()->json($asignacion, 200);
    }


    public function store(Request $request)
    {
        $request->validate([
            'id_estudiante' => 'required',
            'id_tribunal'
        ]);
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');

        $verTutor = DB::table('solicituds')->where('id_estudiante', $request->id_estudiante)->where('solEstado', '1')->count('id_docente');


        $NroTribunal = DB::table('asignacion_tribunals')->where('id_estudiante', $request->id_estudiante)
            ->where('asiEstado', '1')->count('id_tribunal');

          

        if ($verTutor == 1) {
            if ($NroTribunal <= 1) {
                //Asignacion tribunal 1
                $asignacion = new AsignacionTribunal();
                $asignacion->id_estudiante = $request->id_estudiante;
                $asignacion->id_tribunal = $request->id_tribunal;
                $asignacion->fechaAsignacion = $fechaActual;

                if ($asignacion->save()) {
                    $estudiante = Estudiante::findOrFail($asignacion->id_estudiante);
                    $estudiante->esFinal = 'respuesta jurado';
                    
                    $estudiante->update();

                    return response()->json($asignacion, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Ya se ha registrado dos tribunales, verifique por favor',
                    'status_code' => 401
                ], 401);
            }
        } else {
            return response()->json([
                'message' => 'Debe registrar tutor, verifique por favor',
                'status_code' => 401
            ], 402);
        }
    }

    public function update(Request $request, $id)
    {
        $asignacion = AsignacionTribunal::findOrFail($id);
        $asignacion->id_estudiante = $request->id_estudiante;
        $asignacion->id_tribunal = $request->id_tribunal;
        if ($asignacion->update()) {
            return response()->json($asignacion, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function destroy($id)
    {
        $idEstudiante = DB::table('asignacion_tribunals')->where('id',$id)
        ->value('id_estudiante');
        $nroTribunals = DB::table('asignacion_tribunals')->where('id_estudiante', $idEstudiante)->where('asiEstado',1)->count();

        if(AsignacionTribunal::destroy($id)){
            if($nroTribunals <= 2){
                $estudiante = Estudiante::findOrFail($idEstudiante);
                $estudiante->esAsignacion = 'falta';
                $estudiante->update();
            }

        }


        return response()->json(["res" => true, "message" => "Eliminado correctamente!"], 200);
    }

    public function envioAsignacion($id)
    {

        $asignacion = AsignacionTribunal::findOrFail($id);
        $asignacion->cartaEnvio = 'completado';
        if ($asignacion->update()) {
            return response()->json($asignacion, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
    public function respuestaAsignacion($id)
    {   
        $asignacion = AsignacionTribunal::findOrFail($id);
        $asignacion->cartaRespuesta = 'completado';
        if ($asignacion->update()) {
            $verAsignacion = DB::table('asignacion_tribunals')->where('id_estudiante', $asignacion->id_estudiante)
                ->where('cartaRespuesta', 'completado')->count('id_tribunal');
                
            if ($verAsignacion == 2) {
                $estudiante = Estudiante::findOrFail($asignacion->id_estudiante);
                $estudiante->esFinal = 'realizar programacion panel 1';
              
                $estudiante->update();
            }
            return response()->json($asignacion, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
    public function desactivarAsignacion($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $asignacion = AsignacionTribunal::findOrFail($id);
        $asignacion->asiEstado = 0;
        $asignacion->fechaDesactivar = $fechaActual;
        
        $idEstudiante = DB::table('asignacion_tribunals')->where('id',$asignacion->id)
            ->value('id_estudiante');
        $nroTribunals = DB::table('asignacion_tribunals')->where('id_estudiante', $idEstudiante)->where('asiEstado',1)->count();

     //   return $nroTribunals;
        if ($asignacion->update()) {
            if($nroTribunals <= 2){
                $estudiante = Estudiante::findOrFail($idEstudiante);
                $estudiante->esAsignacion = 'falta';
                $estudiante->confirmacionAsignacion = 'falta';
                $estudiante->update();
            }

            return response()->json($asignacion, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
}
