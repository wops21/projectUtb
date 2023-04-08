<?php

namespace App\Http\Controllers;

use App\Models\AsignacionTribunal;
use App\Models\AsignacionTribunal1;
use App\Models\AsignacionTribunal2;
use App\Models\Carrera;
use App\Models\CorrelativoCarta;
use App\Models\Estudiante;
use App\Models\Programacion;
use App\Models\ProgramacionDetalle;
use App\Models\ProgramacionDetalleEstudiante;
use App\Models\ProgramacionDetalleFinal;
use App\Models\Solicitud;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgramacionController extends Controller
{
    public function getAllPanel1(){
        $programacion = Programacion::where('nroPanel','Primer Panel')->orderBy('id','desc')->paginate(5);
        return response()->json($programacion, 200);

    }
    public function getAllPanel2(){
        $programacion = Programacion::where('nroPanel', 'Segundo Panel')->orderBy('id','desc')->paginate(5);
        return response()->json($programacion, 200);
    }
    public function getAllPanel3(){
        $programacion = Programacion::where('nroPanel', 'Tercer Panel')->orderBy('id','desc')->paginate(5);
        return response()->json($programacion, 200);
    }
    public function getPanel1()
    {

        $programacion = Programacion::with('relacionEstudiante.relacionSolicitud.relacionModalidad', 'relacionEstudiante.relacion_carrera', 'relacionDetalle.relacionTribunal')
            ->Where('nroPanel', 'Primer Panel')->Where('proEstado', 'pendiente')
            ->with(['relacionEstudiante.relacionAsignacion' => function ($query) {
                $query->Where('asiEstado', '1')->Where('cartaRespuesta','completado');
             
            }])->with(['relacionEstudiante.relacionSolicitud' => function ($query) {
                $query->Where('solEstado', '1')->where('respuestaSolicitud','completado');
            }])->with(['relacionDetalleEstudiante' => function ($query) {
                $query->Where('esCorrecion', 'pendiente');
            }])->when(request('carrera'), function($q){
                $q->whereHas('relacionEstudiante', function ($q) {
                    $q->where('id_carrera', 'like', '%' . request('carrera') . '%');
                });
            })->when(request('search'), function ($query) {
                $query->whereHas('relacionEstudiante', function ($query) {
                    $query->where('esPaterno', 'like', '%' . request('search') . '%')->orwhere('esMaterno', 'like', '%' . request('search') . '%');
                });
            })->orderBy('id', 'desc')->paginate(5);

        return $programacion;
    }
    public function getPanel2()
    {  
        $programacion = Programacion::with('relacionEstudiante.relacionSolicitud.relacionModalidad', 'relacionEstudiante.relacion_carrera', 'relacionDetalle.relacionTribunal')
            ->Where('nroPanel', 'Segundo Panel')->Where('proEstado', 'pendiente')
            ->with(['relacionEstudiante.relacionAsignacion' => function ($query) {
                $query->Where('asiEstado', '1')->Where('cartaRespuesta','completado');
             
            }])->with(['relacionEstudiante.relacionSolicitud' => function ($query) {
                $query->Where('solEstado', '1')->where('respuestaSolicitud','completado');
            }])->with(['relacionDetalleEstudiante' => function ($query) {
                $query->Where('esCorrecion', 'pendiente');
            }])->when(request('carrera'), function($q){
                $q->whereHas('relacionEstudiante', function ($q) {
                    $q->where('id_carrera', 'like', '%' . request('carrera') . '%');
                });
            })->when(request('search'), function ($query) {
                $query->whereHas('relacionEstudiante', function ($query) {
                    $query->where('esPaterno', 'like', '%' . request('search') . '%')->orwhere('esMaterno', 'like', '%' . request('search') . '%');
                });
            })->orderBy('id', 'desc')->paginate(5);

        return $programacion;
    }

    public function getPanel3()
    {
        $programacion = Programacion::with('relacionEstudiante.relacionSolicitud.relacionModalidad', 
        'relacionEstudiante.relacion_carrera', 'relacionDetalleFinal.relacionTribunal')
        ->Where('nroPanel', 'Tercer Panel')->Where('proEstado', 'pendiente')
        ->with(['relacionEstudiante.relacionAsignacion' => function ($query) {
            $query->Where('asiEstado', '1')->Where('cartaRespuesta','completado');
         
        }])->with(['relacionEstudiante.relacionSolicitud' => function ($query) {
            $query->Where('solEstado', '1')->where('respuestaSolicitud','completado');
        }])->with(['relacionDetalleEstudiante' => function ($query) {
            $query->Where('esCorrecion', 'pendiente');
        }])->when(request('carrera'), function($q){
            $q->whereHas('relacionEstudiante', function ($q) {
                $q->where('id_carrera', 'like', '%' . request('carrera') . '%');
            });
        })->when(request('search'), function ($query) {
            $query->whereHas('relacionEstudiante', function ($query) {
                $query->where('esPaterno', 'like', '%' . request('search') . '%')->orwhere('esMaterno', 'like', '%' . request('search') . '%');
            });
        })->orderBy('id', 'desc')->paginate(5);

    return $programacion;
    }
    public function store(Request $request)
    {
        $request->validate([
            'horaDefensa' => 'required',
            'fechaDefensa' => 'required',
            'id_estudiante' => 'required',

        ]);
        $now = Carbon::now();
        $fechaActual = $now->format('Y-m-d'); 
  $nroTutor = DB::table('solicituds')->where('id_estudiante', $request->id_estudiante)->where('solEstado',1)->where('respuestaSolicitud','completado')->count('id');
        $nroTribunal = DB::table('asignacion_tribunals')->where('id_estudiante', $request->id_estudiante)
            ->where('asiEstado', '1')->count('id_tribunal');

        $verPanel = DB::table('programacions')->where('id_estudiante', $request->id_estudiante)->where('proEstado', 'pendiente')
            ->where('nroPanel', $request->nroPanel)->count('id');

        if($nroTutor == 1){
            if ($nroTribunal <= 1) {
                return response()->json([
                    'message' => 'Debe asignar jurados',
                    'status_code' => 401
                ], 401);
            } else {
                $programacion = new Programacion();
                $programacion->id_estudiante = $request->id_estudiante;
                $programacion->horaDefensa = $request->horaDefensa;
                $programacion->fechaDefensa = $request->fechaDefensa;
                $programacion->nroPanel = $request->nroPanel;
                $programacion->fechaProgramacion = $fechaActual;
    
                //  dd($programacion);
                if ($programacion->save()) {
                    $estudiante = Estudiante::findOrFail($programacion->id_estudiante);
                    $estudiante->esFinal = 'solicitar acta ' . $request->nroPanel;
                    $estudiante->update();
    
    
                    return response()->json($programacion, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor',
                        'status_code' => 500
                    ], 500);
                }
            }
        }else {
            return response()->json([
                'message' => 'El estudiante no cuenta con un tutor activo',
                'status_code' => 402
            ], 402);
        }
       
    }

    public function update(Request $request, $id)
    {
        $programacion = Programacion::findOrFail($id);
        $programacion->id_estudiante = $request->id_estudiante;
        $programacion->horaDefensa = $request->horaDefensa;
        $programacion->fechaDefensa = $request->fechaDefensa;


        if ($programacion->update()) {
            return response()->json($programacion, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor',
                'status_code' => 500
            ], 500);
        }
    }

    public function destroy($id)
    {
        Programacion::destroy($id);
        return response()->json(["res" => true, "message" => "Eliminado correctamente!"], 200);
    }

    public function destroyDetalles($id)
    {


        if (Programacion::destroy($id)) {
        }
        return response()->json(["res" => true, "message" => "Eliminado correctamente!"], 200);
    }
    public function actaRespuestaP1($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalle::findOrFail($id);
        $detalle->actaRespuesta = 'completado';
        $detalle->fechaActaRespuesta = $fechaActual;
        if ($detalle->update()) {

            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function solicitarInforme($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalle::findOrFail($id);
        $detalle->actaRespuesta = 'completado';
        $detalle->fechaSolicitarCorrecion = $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function confirmarCartaP($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalle::findOrFail($id);
        $detalle->cartaProRespuesta = 'completado';
        $detalle->fechaCartaProRespuesta = $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function actaRespuesta($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalle::findOrFail($id);
        $detalle->actaRespuesta = 'completado';
        $detalle->fechaActaRespuesta = $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function solicitudRespuesta($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalle::findOrFail($id);
        $detalle->solicitudInforme = 'completado';
        $detalle->fechaCartaSolInforme = $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function completarCorrecion($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $correcion = ProgramacionDetalleEstudiante::findorFail($id);
        $correcion->esCorrecion = 'completado';
        $correcion->fechaCorrecion = $fechaActual;
        if ($correcion->update()) {
            return response()->json($correcion, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function habilitarPanel2(Request $request, $id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        if($request->notaDefensa >= 60){
            $panel = Programacion::findOrFail($id);
            $panel->notaDefensa = $request->notaDefensa;
            $panel->proEstado = 'aprobado';
            $panel->correcion = $request->correcion;
            $panel->fechaH = $fechaActual;
            $obtenerR1 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('solicitudInforme');
            $obtenerR2 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('solicitudInforme');
                //obtener el estado del estudiante
            $obtenerR3 = DB::table('programacion_detalle_estudiantes')->where('id_programacion', $panel->id)->value('esCorrecion');
            //obtener el estado de las actas
            $obtenerR4 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('actaRespuesta');
            $obtenerR5 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('actaRespuesta');
            if ($obtenerR1 == 'completado' && $obtenerR2 == 'completado' && $obtenerR3 == 'completado' && $obtenerR5 == 'completado' && $obtenerR4 == 'completado') {
                if ($panel->update()) {
                    $idEstudiante = DB::table('programacions')->where('id', $panel->id)
                        ->value('id_estudiante');
                    $actualizar = Estudiante::findOrFail($idEstudiante);
                    $actualizar->habilitacion = 'segundo panelP';
                    $actualizar->esFinal = 'Programar segundo panel';
                    $actualizar->update();
                    return response()->json($panel, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor ',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Debe aprobar la solicitud del jurado ',
                    'status_code' => 402
                ], 402);
            }
        } else {
            $panel = Programacion::findOrFail($id);
            $obtenerR1 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('solicitudInforme');
            $obtenerR2 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('solicitudInforme');
    
            $panel->proEstado = 'reprobado';
            $panel->notaDefensa = $request->notaDefensa;
    
            if ($obtenerR1 == 'completado' && $obtenerR2 == 'completado') {
                if ($panel->update()) {
                    $idEstudiante = DB::table('programacions')->where('id', $panel->id)
                        ->value('id_estudiante');
                    $actualizar = Estudiante::findOrFail($idEstudiante);
                    $actualizar->habilitacion = 'primer panelRe';
                    $actualizar->esFinal = 'programar primer panel';
                    $actualizar->update();
                    return response()->json($panel, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor ',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Debe aprobar la solicitud del jurado ',
                    'status_code' => 402
                ], 402);
            }
        }
       
    }

    public function habilitarPanel3(Request $request, $id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        if($request->notaDefensa >= 60){
            $panel = Programacion::findOrFail($id);
            $panel->proEstado = 'aprobado';
            $panel->notaDefensa = $request->notaDefensa;
            $panel->correcion = $request->correcion;
            $panel->fechaH = $fechaActual;
            $obtenerR1 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('solicitudInforme');
            $obtenerR2 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('solicitudInforme');
            if ($obtenerR1 == 'completado' && $obtenerR2 == 'completado') {
                if ($panel->update()) {
                    $idEstudiante = DB::table('programacions')->where('id', $panel->id)
                        ->value('id_estudiante');
                    $actualizar = Estudiante::findOrFail($idEstudiante);
                    $actualizar->habilitacion = 'tercer panelP';
                    $actualizar->esFinal = 'Programar tercer panel';
                    $actualizar->update();
                    return response()->json($panel, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor ',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Debe aprobar la solicitud del jurado ',
                    'status_code' => 402
                ], 402);
            }
        }else {
            $panel = Programacion::findOrFail($id);
            $panel->proEstado = 'pendiente';
            $panel->notaDefensa = $request->notaDefensa;
            $obtenerR1 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('solicitudInforme');
            $obtenerR2 = DB::table('programacion_detalles')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('solicitudInforme');
            $panel->proEstado = 'reprobado';
    
            if ($obtenerR1 == 'completado' && $obtenerR2 == 'completado') {
                if ($panel->update()) {
                    $idEstudiante = DB::table('programacions')->where('id', $panel->id)
                        ->value('id_estudiante');
                    $actualizar = Estudiante::findOrFail($idEstudiante);
                    $actualizar->habilitacion = 'segundo panelRe';
                    $actualizar->esFinal = 'programar segundo panel';
                    $actualizar->update();
                    return response()->json($panel, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor ',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Debe aprobar la solicitud del jurado ',
                    'status_code' => 402
                ], 402);
            }
        }
      
    }

    public function generarCorrelativoCartaDef($id)
    {
     
        $now = Carbon::now();
        $currentDate = $now->format('Y/m/d');
       $idEstudiante = DB::table('programacions')->where('id',$id)->value('id_estudiante');
        $carreraEstudiante = DB::table('estudiantes')->where('id', $idEstudiante)->value('id_carrera');
 

        $carrera = Carrera::findOrFail($carreraEstudiante);
        $carrera->correlativo = $carrera->correlativo + 1;
        $carrera->update();

        $idT1 =  DB::table('programacion_detalles')->where('id_programacion',$id)->orderBy('id', 'DESC')->limit(1)->value('id');
        $idT2 =  DB::table('programacion_detalles')->where('id_programacion',$id)->orderBy('id', 'ASC')->limit(1)->value('id');

        $trib1 = ProgramacionDetalle::findOrFail($idT1);
        $trib1->nroCartaDefensa = $carrera->correlativo;
        $trib1->fechaCartaProRespuestaR = $currentDate;
        $trib1->update();

        $trib2 = ProgramacionDetalle::findOrFail($idT2);
        $trib2->nroCartaDefensa = $carrera->correlativo;
        $trib2->fechaCartaProRespuestaR = $currentDate;
        $trib2->update();       

       return response()->json($trib1,200);
    }



 public function generarCorrelativoSolicitud($id)
    {
        $now = Carbon::now();
       $currentDate = $now->format('Y/m/d');

        $idEstudiante = DB::table('solicituds')->where('id',$id)->value('id_estudiante');
        $carreraEstudiante = DB::table('estudiantes')->where('id', $idEstudiante)->value('id_carrera');
        $carrera = Carrera::findOrFail($carreraEstudiante);
        $carrera->correlativo = $carrera->correlativo + 1;
        $carrera->update();
        $sol = Solicitud::findOrFail($id);
        $sol->nrosolicitud = $carrera->correlativo;
        $sol->solFecha = $currentDate;
        $sol->update();        

       return response()->json($sol,200);
    }
    public function generarCorrelativoInforme($id)
    {
        
        $now = Carbon::now();
        $currentDate = $now->format('Y/m/d');

        $idEstudiante = DB::table('programacions')->where('id',$id)->value('id_estudiante');
        $carreraEstudiante = DB::table('estudiantes')->where('id', $idEstudiante)->value('id_carrera');

        $carrera = Carrera::findOrFail($carreraEstudiante);
        $carrera->correlativo = $carrera->correlativo + 1;
        $carrera->update();

        $idT1 =  DB::table('programacion_detalles')->where('id_programacion',$id)->orderBy('id', 'DESC')->limit(1)->value('id');
        $idT2 =  DB::table('programacion_detalles')->where('id_programacion',$id)->orderBy('id', 'ASC')->limit(1)->value('id');

        $trib1 = ProgramacionDetalle::findOrFail($idT1);
        $trib1->nroCartaSolInforme = $carrera->correlativo;
        $trib1->fechaCartaSolInformeR = $currentDate;
        $trib1->update();

        $trib2 = ProgramacionDetalle::findOrFail($idT2);
        $trib2->nroCartaSolInforme = $carrera->correlativo;
        $trib2->fechaCartaSolInformeR = $currentDate;
        $trib2->update();       

       return response()->json($trib1,200);
 
    }

    //panel final
   
    public function generarCorrelativoCartaDefFinal($id)
    {
     
        $now = Carbon::now();
        $currentDate = $now->format('Y/m/d');
       $idEstudiante = DB::table('programacions')->where('id',$id)->value('id_estudiante');
        $carreraEstudiante = DB::table('estudiantes')->where('id', $idEstudiante)->value('id_carrera');
 

        $carrera = Carrera::findOrFail($carreraEstudiante);
        $carrera->correlativo = $carrera->correlativo + 1;
        $carrera->update();

        $idT1 =  DB::table('programacion_detalle_finals')->where('id_programacion',$id)->orderBy('id', 'DESC')->limit(1)->value('id');
        $idT2 =  DB::table('programacion_detalle_finals')->where('id_programacion',$id)->orderBy('id', 'ASC')->limit(1)->value('id');

        $trib1 = ProgramacionDetalleFinal::findOrFail($idT1);
        $trib1->nroCartaDefensa = $carrera->correlativo;
        $trib1->fechaCartaProRespuestaR = $currentDate;
        $trib1->update();

        $trib2 = ProgramacionDetalleFinal::findOrFail($idT2);
        $trib2->nroCartaDefensa = $carrera->correlativo;
        $trib2->fechaCartaProRespuestaR = $currentDate;
        $trib2->update();       

       return response()->json($trib1,200);
    }
    public function generarCorrelativoInformeFinal($id)
    {
        
        $now = Carbon::now();
        $currentDate = $now->format('Y/m/d');

        $idEstudiante = DB::table('programacions')->where('id',$id)->value('id_estudiante');
        $carreraEstudiante = DB::table('estudiantes')->where('id', $idEstudiante)->value('id_carrera');

        $carrera = Carrera::findOrFail($carreraEstudiante);
        $carrera->correlativo = $carrera->correlativo + 1;
        $carrera->update();

        $idT1 =  DB::table('programacion_detalle_finals')->where('id_programacion',$id)->orderBy('id', 'DESC')->limit(1)->value('id');
        $idT2 =  DB::table('programacion_detalle_finals')->where('id_programacion',$id)->orderBy('id', 'ASC')->limit(1)->value('id');

        $trib1 = ProgramacionDetalleFinal::findOrFail($idT1);
        $trib1->nroCartaSolInforme = $carrera->correlativo;
        $trib1->fechaCartaSolInformeR = $currentDate;
        $trib1->update();

        $trib2 = ProgramacionDetalleFinal::findOrFail($idT2);
        $trib2->nroCartaSolInforme = $carrera->correlativo;
        $trib2->fechaCartaSolInformeR = $currentDate;
        $trib2->update();       

       return response()->json($trib1,200);
 
    }
    public function generarCorrelativoEmpaste($id)
    {
        
        $now = Carbon::now();
        $currentDate = $now->format('Y/m/d');

        $idEstudiante = DB::table('programacions')->where('id',$id)->value('id_estudiante');
        $carreraEstudiante = DB::table('estudiantes')->where('id', $idEstudiante)->value('id_carrera');

        $carrera = Carrera::findOrFail($carreraEstudiante);
        $carrera->correlativo = $carrera->correlativo + 1;
        $carrera->update();

        $idT1 =  DB::table('programacion_detalle_finals')->where('id_programacion',$id)->orderBy('id', 'DESC')->limit(1)->value('id');
        $idT2 =  DB::table('programacion_detalle_finals')->where('id_programacion',$id)->orderBy('id', 'ASC')->limit(1)->value('id');

        $trib1 = ProgramacionDetalleFinal::findOrFail($idT1);
        $trib1->nroCartaEmpaste = $carrera->correlativo;
        $trib1->fechaCartaEmpasteR = $currentDate;
        $trib1->update();

        $trib2 = ProgramacionDetalleFinal::findOrFail($idT2);
        $trib2->nroCartaEmpaste = $carrera->correlativo;
        $trib2->fechaCartaEmpasteR = $currentDate;
        $trib2->update();       

       return response()->json($trib1,200);
 
    }
    public function actaRespuestaFinal($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalleFinal::findOrFail($id);
        $detalle->actaRespuesta = 'completado';
        $detalle->fechaActaRespuesta = $fechaActual;
        if ($detalle->update()) {

            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function solicitarInformeFinal($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalleFinal::findOrFail($id);
        $detalle->actaRespuesta = 'completado';
        $detalle->fechaCartaSolInforme= $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function confirmarCartaPFinal($id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalleFinal::findOrFail($id);
        $detalle->cartaProRespuesta = 'completado';
        $detalle->fechaCartaProRespuesta = $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
    public function confirmarCartaEmpaste($id){
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        $detalle = ProgramacionDetalleFinal::findOrFail($id);
        $detalle->cartaEmpaste = 'completado';
        $detalle->fechaCartaEmpaste = $fechaActual;
        if ($detalle->update()) {
            return response()->json($detalle, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function habilitarEmpaste(Request $request, $id)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('d/m/Y');
        if($request->notaDefensa >= 60){
            $panel = Programacion::findOrFail($id);
            $panel->proEstado = 'aprobado';
            $panel->notaDefensa = $request->notaDefensa;
            $panel->correcion = $request->correcion;
            $panel->fechaH = $fechaActual;
            $obtenerR1 = DB::table('programacion_detalle_finals')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('cartaEmpaste');
            $obtenerR2 = DB::table('programacion_detalle_finals')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('cartaEmpaste');
            if ($obtenerR1 == 'completado' && $obtenerR2 == 'completado') {
                if ($panel->update()) {
                    $idEstudiante = DB::table('programacions')->where('id', $panel->id)
                        ->value('id_estudiante');
                    $actualizar = Estudiante::findOrFail($idEstudiante);
                    $actualizar->habilitacion = 'empaste';
                    $actualizar->esFinal = 'Realizar empaste';
                    $actualizar->update();
                    return response()->json($panel, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor ',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Debe aprobar la solicitud del jurado ',
                    'status_code' => 402
                ], 402);
            }
        }else {
            $panel = Programacion::findOrFail($id);
            $panel->proEstado = 'pendiente';
            $panel->notaDefensa = $request->notaDefensa;
            $obtenerR1 = DB::table('programacion_detalle_finals')->where('id_programacion', $panel->id)->orderBy('id', 'DESC')
                ->limit(1)->value('cartaEmpaste');
            $obtenerR2 = DB::table('programacion_detalle_finals')->where('id_programacion', $panel->id)->orderBy('id', 'ASC')
                ->limit(1)->value('cartaEmpaste');
            $panel->proEstado = 'reprobado';
    
            if ($obtenerR1 == 'completado' && $obtenerR2 == 'completado') {
                if ($panel->update()) {
                    $idEstudiante = DB::table('programacions')->where('id', $panel->id)
                        ->value('id_estudiante');
                    $actualizar = Estudiante::findOrFail($idEstudiante);
                    $actualizar->habilitacion = 'tercer panelRe';
                    $actualizar->esFinal = 'programar tercer panel';
                    $actualizar->update();
                    return response()->json($panel, 200);
                } else {
                    return response()->json([
                        'message' => 'Ocurrio un error, intente otra vez por favor ',
                        'status_code' => 500
                    ], 500);
                }
            } else {
                return response()->json([
                    'message' => 'Debe aprobar la informe empaste del jurado ',
                    'status_code' => 402
                ], 402);
            }
        }
      
    }
}
