<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solicitud;
use App\Models\Estudiante;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class SolicitudController extends Controller
{

    public function getSolicitudId($id){
        $solicitud = Solicitud::with('relacionEstudiante.relacion_carrera','relacionModalidad','relacionDocente')->where('id',$id)->get();
        return response()->json($solicitud, 200);
    }
    public function index()
    {
        $solicitud = Solicitud::with('relacionEstudiante.relacion_carrera','relacionModalidad','relacionDocente')
        ->where('respuestaSolicitud', 'pendiente')->orWhere('envioSolicitud','pendiente')->when(request('search'), 
        function ($query) {
            $query->where('solNumeroRuta', 'like', '%' . request('search') . '%');
        })->orderBy('id', 'desc')->paginate(5);

        return response()->json($solicitud,200);
    }
    public function filtroSolicitud(){
        $solicitud = Solicitud::with('relacionEstudiante.relacion_carrera','relacionModalidad','relacionDocente')
        ->where('solEstado',"1")->where('respuestaSolicitud', 'pendiente')
        ->when(request('search'), 
        function ($query) {
            $query->where('solNumeroRuta', 'like', '%' . request('search') . '%')->orwhereHas('relacionEstudiante',function($q){
                $q->where('esPaterno', 'like', '%' . request('search') . '%')->where('respuestaSolicitud', 'pendiente');  
              });
        })->when(request('carrera'), 
        function ($query) {
            $query->whereHas('relacionEstudiante',function($q){
            $q->where('id_carrera', 'like', '%' . request('carrera') . '%');  
            });
        })->orderBy('id', 'desc')->paginate(5);

        return response()->json($solicitud,200);
    
    }
    public function solicitudesAprobadas()
    {
        $solicitud = Solicitud::with('relacionEstudiante.relacion_carrera','relacionModalidad','relacionDocente')
        ->where('respuestaSolicitud', 'completado')->when(request('search'), 
        function ($query) {
            $query->where('solNumeroRuta', 'like', '%' . request('search') . '%');
        })->orderBy('id', 'desc')->paginate(5);

        return response()->json($solicitud,200);
    }


    public function store(Request $request)
    {
        $request->validate([
            'id_estudiante' => 'required',
            'id_docente' => 'required',
            'id_modalidad' => 'required',
            'solNumeroRuta' => 'required'

        ]);
    
        $verTribunal = DB::table('solicituds')->where('id_estudiante', $request->id_estudiante)->where('solEstado','1')
        ->count('id_docente');

        if($verTribunal < 1){
            
        $now = Carbon::now();
        $currentDate = $now->format('Y/m/d');
        $add = Carbon::now()->addDay(5);
        $addLimit = $add->format('Y/m/d');
        $solicitud = new Solicitud();
        $solicitud->id_estudiante = $request->id_estudiante;
        $solicitud->id_docente = $request->id_docente;
        $solicitud->id_modalidad = $request->id_modalidad;
       $solicitud->solFecha = $currentDate;
       $solicitud->solFechaLimit =  $addLimit;
        $solicitud->solNumeroruta = $request->solNumeroRuta;
     
        
        if ($solicitud->save()) {
            $estadoEs = Estudiante::findOrFail($request->id_estudiante);
            $estadoEs->esFinal = 'respuesta solicitud';
            $estadoEs->esSolicitud = 'completado';
            $estadoEs->update();
            return response()->json($solicitud, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
        } else {
            return response()->json([
                'message' => 'El estudiante ya tiene tutor registrado, verifique por favor ',
                'status_code' => 401
            ], 401);
        }

    }

    public function update(Request $request,$id)
    {   
        $request->validate([
            'id_estudiante' => 'required',
            'id_docente' => 'required',
            'id_modalidad' => 'required',
            'solNumeroRuta' => 'required'

        ]);
     
        $solicitud = Solicitud::findOrFail($id);
        $solicitud->id_estudiante = $request->id_estudiante;
        $solicitud->id_docente = $request->id_docente;
        $solicitud->id_modalidad = $request->id_modalidad;
        $solicitud->solNumeroRuta = $request->solNumeroRuta;
        if ($solicitud->update()) {
            return response()->json($solicitud, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function desactivarSol($id){
        $now = Carbon::now();
        $currentDate = $now->format('Y-m-d');
        $solicitud = Solicitud::findOrFail($id);
        $solicitud->solEstado = '0';
        $solicitud->solFechaDesactivar = $currentDate;
        $idEstudiante = DB::table('solicituds')->where('id',$solicitud->id)->value('id_estudiante');
        if ($solicitud->update()) {
            $estudiante = Estudiante::findOrFail($idEstudiante);
            $estudiante->esSolicitud = 'falta';
            $estudiante->update();
            return response()->json($solicitud, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }

    }
    public function destroy($id)
    {
        
   $idEstudiante = DB::table('solicituds')->where('id',$id)->value('id_estudiante');
        if(Solicitud::destroy($id)){

         
            $estudiante = Estudiante::findOrFail($idEstudiante);
            $estudiante->esSolicitud = 'falta';
            $estudiante->update();
        }
        return response()->json(["res" => true, "message" => "Eliminado correctamente!"], 200);
    }


    public function envioSolicitud($id)
    {

        $solicitud = Solicitud::findOrFail($id);
        $solicitud->envioSolicitud = 'completado';
        if ($solicitud->update()) {
            $estudiante = Estudiante::findOrFail($solicitud->id_estudiante);
            $estudiante->esFinal = 'asignacion jurados';
            $estudiante->update();
            return response()->json($solicitud, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
    public function respuestaSolicitud($id)
    {
        $now = Carbon::now();
        $currentDate = $now->format('Y-m-d');
        $solicitud = Solicitud::findOrFail($id);
        $solicitud->respuestaSolicitud = 'completado';
        $solicitud->solFechaAprobar = $currentDate;
        if ($solicitud->update()) {
            return response()->json($solicitud, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
}
