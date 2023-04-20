<?php

namespace App\Http\Controllers;

use App\Models\AsignacionEvento;
use App\Models\AsignacionPuntos;
use App\Models\Estudiante;
use App\Models\Evento;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class AsignacionEventoController extends Controller
{

    public function reporteAsignaciones()
    {
        $encargado = Auth::user()->id;

        $asignacion = AsignacionEvento::with('relacionEstudiante', 'relacionEvento.relacionTipoEvento', 'relacionPuntos.relacionHorario')->where('id_usuario', $encargado)->get();
        $newArray = $asignacion->map(function ($estudiante) {
            return [
                'id' => $estudiante->id,
                'nombres' => $estudiante->relacionEstudiante->esNombres,
                'paterno' => $estudiante->relacionEstudiante->esPaterno,
                'materno' => $estudiante->relacionEstudiante->esMaterno,
                'tipo' => $estudiante->relacionEvento->relacionTipoEvento->tipoEvento,
                'titulo' => $estudiante->relacionEvento->nombreEvento,
                'costo' => $estudiante->relacionEvento->costo,
                'puntos' => $estudiante->relacionPuntos,

            ];
        });
        return response()->json($newArray, 200);
    }


    public function puntosAsignados()
    {
        $puntos = AsignacionEvento::with('relacionPuntos')->get();
        return $puntos;
    }

    public function todosEventosEstudiantes($id)
    {
        $asignacion = AsignacionEvento::where('id_estudiante', $id)->get();
        $id_eventos = AsignacionEvento::where('id_estudiante', $id)->pluck('id_evento');
        $eventos = Evento::with('relacionTipoEvento')->where('id', $id_eventos)->get();
        $estudiante_con_eventos = $asignacion->map(function ($asignacion) use ($eventos) {
            return [
                'nombreEvento' => $eventos[0]->nombreEvento,
                'tipoEvento' => $eventos[0]->relacionTipoEvento->tipoEvento,
                'fechaAsignacion' => $asignacion->fechaAsignacion,
                'estado' => $asignacion->asiEstado

            ];
        });

        return response()->json($estudiante_con_eventos, 200);
    }


    public function index()
    {
        $asignacion = AsignacionEvento::with('relacionEstudiante.relacion_carrera')->where('asiEstado', 'pendiente')
            ->when(
                request('search'),
                function ($query) {
                    $query->where('fechaAsignacion', 'like', '%' . request('search') . '%')->orwhereHas('relacionEstudiante', function ($q) {
                        $q->where('esPaterno', 'like', '%' . request('search') . '%')->where('esGrado', 'estudiante');
                    });
                }
            )->when(
                request('carrera'),
                function ($query) {
                    $query->whereHas('relacionEstudiante', function ($q) {
                        $q->where('id_carrera', 'like', '%' . request('carrera') . '%');
                    });
                }
            )->orderBy('id', 'desc')->paginate(5);
        return response()->json($asignacion, 200);
    }

    public function totalHoras($id)
    {

        //    $id_eventos = AsignacionEvento::where('id_estudiante', $id)->pluck('id_evento');

        //  $idSem = DB::table('asignacion_eventos')->where('id_estudiante', $id)->value('id_evento');
        //     $evento = Evento::where('id', $id_eventos)->pluck('horaAcademica');
        $estudiante = Estudiante::with('relacion_Carrera')->where('id', $id)->findOrFail($id);
        $id_eventos = AsignacionEvento::where('id_estudiante', $id)->pluck('id_evento');
        return $eventos = Evento::whereIn('id', $id_eventos)->get();

        $estudiante_con_eventos = $eventos->map(function ($evento) use ($estudiante) {
            return [
                'estudiante' => $estudiante->esNombres,
                'evento' => $evento->nombreEvento,
                'horas_academicas' => $evento->horaAcademica
            ];
        });
        return $estudiante_con_eventos;
        $estudiante = Estudiante::withSum('estudiantesT', 'horaAcademica')->get();
        return $estudiante;
    }

    public function detalleSeminario()
    {

        $detalle = DB::table('asignacion_eventos')->join('estudiantes', 'asignacion_eventos.id_estudiante', '=', 'estudiantes.id')
            ->join('eventos', 'asignacion_eventos.id_evento', '=', 'eventos.id')
            ->select('estudiantes.esNombres', DB::raw('COUNT(DISTINCT asignacion_eventos.id) as total'), DB::raw('SUM(eventos.horaAcademica) as HoraAcademica'))->groupBy('estudiantes.esNombres')->paginate(5);

        return response()->json($detalle, 200);
    }
    public function inscritosEventos()
    {
        $inscritos = DB::table('asignacion_eventos')->join('eventos', 'asignacion_eventos.id_evento', '=', 'eventos.id')
            ->select('eventos.nombreEvento', DB::raw('COUNT(DISTINCT asignacion_eventos.id) as total'))->groupBy('eventos.nombreEvento')->paginate(5);
        return response()->json($inscritos, 200);
    }
    public function userAsignacion()
    {
        $encargado = Auth::user()->id;
        $asignacion = AsignacionEvento::with('relacionEstudiante', 'relacionEvento', 'relacionPuntos.relacionHorario')->where('id_usuario', $encargado)->when(request('search'), function ($q) {
            $q->whereHas('relacionEstudiante', function ($q) {
                $q->where('esPaterno', 'like', '%' . request('search') . '%')->where('esGrado', 'estudiante');
            });
        })->orderBy('id', 'desc')->paginate(5);
        return response()->json($asignacion, 200);
    }

    public function store(Request $request)
    {

        $encargado = Auth::user()->id;
        $request->validate([
            'id_estudiante' => 'required',
            'id_evento' => 'required',
        ]);
        $now = Carbon::now();
        $fechaActual = $now->format('Y/m/d');
        $asignacion = new AsignacionEvento();
        $asignacion->id_usuario = $encargado;
        $asignacion->id_estudiante = $request->id_estudiante;
        $asignacion->id_evento = $request->id_evento;
        $asignacion->fechaAsignacion = $fechaActual;
        $carnetEs = Estudiante::where('id', $asignacion->id_estudiante)->value('esCarnet');

        $asignacion->idEBycrypt = encrypt($carnetEs);


        $asignacion->save();

        if ($request->selected) {
            foreach (json_decode($request->selected) as $item) {
                $puntos = new AsignacionPuntos();
                $puntos->id_asignacion_evento = $asignacion->id;
                $puntos->id_horario_docente = $item->id;
                $puntos->cantidad_puntos = $item->cantidad_puntos;
                $puntos->save();
            }
        }

        if ($asignacion->save()) {
            $ultimaAsignacion = AsignacionEvento::where('id_evento', $asignacion->id_evento)
                ->where('id_estudiante', $asignacion->id_estudiante)->orderBy('id', 'desc')->limit(1)->value('id');

            $nombreEve = Evento::where('id', $asignacion->id_evento)->value('nombreEvento');
            $nombreEs = Estudiante::where('id', $asignacion->id_estudiante)->value('esNombres');
            $paternoEs = Estudiante::where('id', $asignacion->id_estudiante)->value('esPaterno');
            $maternoEs = Estudiante::where('id', $asignacion->id_estudiante)->value('esMaterno');
            $correoEs = Estudiante::where('id', $asignacion->id_estudiante)->value('esCorreo');
            $qrInfo = array(
                'nombreEvento' => $nombreEve,
                'nombreEstudiante' => $nombreEs,
                'paternoEstudiante' =>$paternoEs,
                'maternoEstudiante' =>$maternoEs,
                'correoEstudiante' => $correoEs

            );


            $qr = QrCode::format('png')->size(200)->generate("https://infoutb.fun/busqueda-qr/" . $asignacion->idEBycrypt . "/" .  $asignacion->id_evento
                . "/" . $ultimaAsignacion);

            // Enviar el correo electrónico con el código QR adjunto
            Mail::send('emails.qr_information', $qrInfo, function ($message) use ($qrInfo, $qr) {
                $message->to($qrInfo['correoEstudiante'], $qrInfo['nombreEstudiante']);
                $message->subject('Confirmacion de inscripcion');
                $message->attachData($qr, 'verificacion.png', [
                    'mime' => 'image/png',
                ]);
            });
        } else {
            return response()->json([
                "message" => "ha ocurrido un error",
                "code_status" => 500
            ], 500);
        }
        return response()->json($asignacion, 200);
    }

    public function update(Request $request, $id)
    {
        $encargado = Auth::user()->id;
        $asignacion = AsignacionEvento::findOrFail($id);
        $asignacion->id_usuario = $encargado;
        $asignacion->id_estudiante = $request->input('id_estudiante');
        $asignacion->id_evento = $request->input('id_evento');
        $asignacion->save();

        AsignacionPuntos::where('id_asignacion_evento', $id)->delete();

        $selected = $request->input('selected');
        foreach (json_decode($selected) as $item) {
            $puntos = new AsignacionPuntos();
            $puntos->id_asignacion_evento = $asignacion->id;
            $puntos->id_horario_docente = $item->id;
            $puntos->cantidad_puntos = $item->cantidad_puntos;
            $puntos->save();
        }
        return response()->json(['message' => 'Asignación actualizada exitosamente.']);
    }

    public function destroy(AsignacionEvento $asignacion)
    {
        if ($asignacion->delete()) {
            return response()->json([
                "message" => "se ha eliminado exitosamente",
                "status_code" => 200
            ], 200);
        } else {
            return response()->json([
                "message" => 'Ocurrio un error, intentelo otra vez por favor',
                "status_code" => 500
            ], 500);
        }
    }
    public function entregarCertificado(AsignacionEvento $asignacion)
    {
        $asignacion->asiEstado = 'entregado';

        if ($asignacion->update()) {
            return response()->json([
                "message" => "se ha entregado exitosamente",
                "status_code" => 200
            ], 200);
        } else {
            return response()->json([
                "message" => 'Ocurrio un error, intentelo otra vez por favor',
                "status_code" => 500
            ], 500);
        }
    }
}
