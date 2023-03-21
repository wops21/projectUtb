<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estudiante;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use Symfony\Component\HttpKernel\HttpCache\Esi;

class EstudianteController extends Controller
{   

    public function getEstudianteAsignacionModal(){
        $estudiante = Estudiante::where('esEstado',1)->where('esAsignacion','completado')->get();
        return response()->json($estudiante, 200);
    }    
    public function getEstudianteAsignacion($id){
        $estudiante = Estudiante::where('id_carrera',$id)->where('esEstado',1)->where('esAsignacion','falta')->where('esSolicitud','completado')->
        WhereHas('relacionSolicitud', function($q) {
            $q->where('envioSolicitud',  'completado');
        })->
        WhereHas('relacionSolicitud', function($q) {
            $q->where('respuestaSolicitud',  'completado');
        })->orderBy('id','desc')->get();
        return response()->json($estudiante, 200);
    }
    public function getEstudianteSolicitud($id){
        $estudiante = Estudiante::where('id_carrera',$id)->where('esEstado',1)->where('esSolicitud','falta')->orderBy('id','desc')->get();
        return response()->json($estudiante, 200);
    }
    public function getEstudianteSolicitudModal(){
        $estudiante = Estudiante::where('esEstado',1)->where('esSolicitud','completado')->orderBy('id','desc')->get();
        return response()->json($estudiante, 200);
    }

    public function getEstudiantesp3($id){
   
        $estudiante = DB::table('estudiantes')->where('id_carrera','=',$id)->where('esEstado','=',1)->where(function ($query){
            $query->where('confirmacionAsignacion','completado')->where('esSolicitud','=','completado');
          })->where('habilitacion','=','tercer panelP')->orWhere('habilitacion','=','tercer panelRe')
            ->orderBy('id','desc')->get();
            return response()->json($estudiante, 200);
     }
    public function getEstudiantesp2($id){
       $estudiante = DB::table('estudiantes')->where('id_carrera','=',$id)->where('esEstado','=',1)->where(function ($query){
        $query->where('confirmacionAsignacion','completado')->where('esSolicitud','=','completado');
      })->where('habilitacion','=','segundo panelP')->orWhere('habilitacion','=','segundo panelRe')
        ->orderBy('id','desc')->get();
        return response()->json($estudiante, 200);
    }
    public function getEstudiantesp1($id){
        $estudiante = DB::table('estudiantes')->where('id_carrera','=',$id)->where('esEstado','=',1)->where(function ($query){
        $query->where('confirmacionAsignacion','completado')->where('esSolicitud','=','completado');
      })->where('habilitacion','=','primer panelP')->orWhere('habilitacion','=','primer panelRe')
        ->orderBy('id','desc')->get();
        return response()->json($estudiante, 200);
     }
    public function getCarreraEstudiante($id){
       $estudiante = Estudiante::where('id_carrera',$id)->where('esEstado',1)->orderBy('id','desc')->get();
       return response()->json($estudiante, 200);
    }  
    public function getEstudiantes(){
        $estudiantes = Estudiante::with('relacion_carrera')->where('esEstado',1)->orderBy('id','desc')->get();
        return response()->json($estudiantes,200);
    }
    public function index(){
        $estudiante = Estudiante::with('relacionAsignacion.relacionTribunal','relacionSolicitud.relacionDocente','relacionProgramacion.relacionDetalleEstudiante','relacion_carrera','relacionObservacion')->when(request('search'), function ($query) {
            $query->where('esPaterno', 'like', '%' . request('search') . '%')->orWhereHas('relacion_carrera', function($q) {
                $q->where('carreraNombre',  request('search') );
            });
        })->where('esEstado','1')->orderBy('id', 'desc')->paginate(4);
        return response()->json($estudiante,200);
    }
    //estudiates index
    public function filtroEstudianteDash(){
    $estudiante = Estudiante::with('relacionAsignacion.relacionTribunal','relacionSolicitud.relacionDocente','relacionProgramacion.relacionDetalleEstudiante','relacionProgramacion','relacion_carrera','relacionObservacion')->where('esEstado',1)
    ->when(request('carrera'), function ($query) {
        $query->Where('id_carrera','like','%' . request('carrera') . '%');
    }, )->when(request('search'), function ($query) {
        $query->Where('esPaterno','like','%' . request('search') . '%' . '');})->orderBy('id','desc')->paginate(8);
        return response()->json($estudiante,200);
    }
    
    public function getHistorialEstudiante($id){
        $estudiante = Estudiante::where('id',$id)->with('relacionAsignacion.relacionTribunal','relacionSolicitud', 'relacionProgramacion')->get();
        return response()->json($estudiante, 200);
    }
    public function getEstudiantesCarrera(){
        if(request('search')){
            $estudiante = Estudiante::with('relacion_carrera')->with(['relacion_carrera' => function($query){
                $query->where('carreraNombre', 'like', '%' . request('search') . '%');
              }])->orderBy('id','desc')->paginate(5);
              return response()->json($estudiante, 200);
        }else {
            return 'no';
        }
    }

    public function estudiantesInactivos(){
        $estudiante = Estudiante::with('relacion_carrera')->where('esEstado','0')->when(request('search'), function ($query) {
            $query->where('esPaterno', 'like', '%' . request('search') . '%')->orwhere('esMaterno', 'like', '%' . request('search') . '%');
        })->orderBy('id', 'desc')->paginate(5);
        return response()->json($estudiante,200);
    }

    public function store(Request $request){
        $request->validate([
            'id_carrera' => 'required',
            'esNombres' => 'required',
            'esPaterno' => 'required',
            'esMaterno' => 'required',
            'esCelular' => 'required',
            'esGenero' => 'required',
            'esTituloProyecto' => 'required'
        ]);
        $estudiante = new Estudiante();
        $estudiante->id_carrera = $request->id_carrera;
        $estudiante->esNombres = $request->esNombres;
        $estudiante->esPaterno = $request->esPaterno;
        $estudiante->esMaterno = $request->esMaterno;
        $estudiante->esCelular = $request->esCelular;
        $estudiante->esGenero = $request->esGenero;
        $estudiante->esTituloProyecto = $request->esTituloProyecto;

        if($estudiante->save()){
            return response()->json($estudiante, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }

    }

    public function update(Request $request, $id){
        $request->validate([
            'id_carrera' => 'required',
            'esNombres' => 'required',
            'esPaterno' => 'required',
            'esMaterno' => 'required',
            'esCelular' => 'required',
            'esGenero' => 'required',
            'esTituloProyecto' => 'required'
        ]);
        $estudiante = Estudiante::findOrFail($id);
        $estudiante->id_carrera = $request->id_carrera;
        $estudiante->esNombres = $request->esNombres;
        $estudiante->esPaterno = $request->esPaterno;
        $estudiante->esMaterno = $request->esMaterno;
        $estudiante->esCelular = $request->esCelular;
        $estudiante->esGenero = $request->esGenero;
        $estudiante->esTituloProyecto = $request->esTituloProyecto;
 
        if($estudiante->update()){
            return response()->json($estudiante, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }

    }

    public function desactivar($id){
        $estudiante = Estudiante::findOrFail($id);
        $estudiante->esEstado = 0;
        if($estudiante->update()){
            return response()->json([
                'message' => 'Se ha desactivado exitosamente',
                'status_code' => 200
            ],200);
        } else {
            
            return response()->json([
                'message' => 'Ocurrio un error, intentelo otra vez por favor',
                'status_code' => 500,
            ],500);
        }
    }

    public function activar($id){
        $estudiante = Estudiante::findOrFail($id);
        $estudiante->esEstado = 1;
        if($estudiante->update()){
            return response()->json([
                'message' => 'Se ha activado exitosamente',
                'status_code' => 200
            ],200);
        } else {
            
            return response()->json([
                'message' => 'Ocurrio un error, intentelo otra vez por favor',
                'status_code' => 500,
            ],500);
        }
    }
    
}
