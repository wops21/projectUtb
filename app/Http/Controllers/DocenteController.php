<?php

namespace App\Http\Controllers;

use App\Models\AsignacionTribunal;
use Illuminate\Http\Request;
use App\Models\Docente;
use App\Models\ProgramacionDetalle;
use App\Models\ProgramacionDetalleFinal;
use App\Models\Solicitud;
use Carbon\Carbon;

class DocenteController extends Controller
{

    public function reporteP1Docente($id,Request $request){
  
      $docente = ProgramacionDetalle::with('relacionEstudiante')->where('id_tribunal',$id)->whereHas('relacionProgramacion', function($q)
      { $q->where('nroPanel','Primer Panel');})->whereBetween('fechaProgramacionDetalle',[$request->from,$request->to])->get();
        return response()->json($docente,200);
    }
    
    public function reporteP2Docente($id,Request $request){
  
        $docente = ProgramacionDetalle::with('relacionEstudiante')->where('id_tribunal',$id)->whereHas('relacionProgramacion', function($q)
        { $q->where('nroPanel','Segundo Panel');})->whereBetween('fechaProgramacionDetalle',[$request->from,$request->to])->get();
          return response()->json($docente,200);
      }
      public function reporteP3Docente($id,Request $request){
  
        $docente = ProgramacionDetalleFinal::with('relacionEstudiante')->where('id_tribunal',$id)->whereHas('relacionProgramacion', function($q)
        { $q->where('nroPanel','Tercer Panel');})->whereBetween('fechaProgramacionDetalle',[$request->from,$request->to])->get();
          return response()->json($docente,200);
      }
      public function reportePaDocente($id,Request $request){
        $docente = Solicitud::with('relacionEstudiante')->where('id_docente',$id)->whereBetween('solFecha',[$request->from,$request->to])->get();
          return response()->json($docente,200);
      }
      public function reporteAsDocente($id,Request $request){
        $docente = AsignacionTribunal::with('relacionEstudiante')->where('id_tribunal',$id)->whereBetween('fechaAsignacion',[$request->from,$request->to])->get();
          return response()->json($docente,200);
      }

    public function getCarreraDocente($id)
    {
        $docente = Docente::with('relacionSolicitud', 'relacionAsignacion.relacionEstudiante')->where('id_carrera', $id)->where('docEstado', 1)->orderBy('id', 'desc')->get();
        return response()->json($docente, 200);
    }
    public function getDocenteModal()
    {
        $docente = Docente::with('relacionSolicitud', 'relacionAsignacion.relacionEstudiante')->where('docEstado', 1)->orderBy('id', 'desc')->get();
        return response()->json($docente, 200);
    }

    public function getDocentes()
    {
        $docente = Docente::where('docEstado', '1')->get();
        return response()->json($docente, 200);
    }
    public function index()
    {
        $docente =  Docente::with('relacionCarrera', 'relacionSolicitud.relacionEstudiante', 'relacionAsignacion.relacionEstudiante', 'relacionDetalle.relacionProgramacion', 'relacionDetalleFinal.relacionProgramacion', 'relacionDetalle.relacionEstudiante','relacionDetalleFinal.relacionEstudiante')->where('docEstado', '1')->when(request('search'), function ($query) {
            $query->where('docPaterno', 'like', '%' . request('search') . '%')->orwhere('docMaterno', 'like', '%' . request('search') . '%');
        })->orderBy('id', 'desc')->paginate(5);
        return $docente;
    }
    public function filtroDocente()
    {
        $docente = Docente::with('relacionCarrera', 'relacionSolicitud.relacionEstudiante', 'relacionAsignacion.relacionEstudiante', 'relacionDetalle.relacionProgramacion', 'relacionDetalleFinal.relacionProgramacion', 'relacionDetalle.relacionEstudiante', 'relacionDetalleFinal.relacionEstudiante')->where('docEstado', 1)->when(request('carrera'), function ($query) {
            $query->Where('id_carrera', 'like', '%' . request('carrera') . '%');
        },)->when(request('search'), function ($query) {
            $query->Where('docPaterno', 'like', '%' . request('search') . '%');
        })->orderBy('id', 'desc')->paginate(8);
        return response()->json($docente, 200);
    }
    public function filtroDocentePrimerPanel($id)
    {
        $docente = Docente::with('relacionCarrera', 'relacionSolicitud.relacionEstudiante', 'relacionAsignacion.relacionEstudiante', 'relacionDetalle.relacionProgramacion', 'relacionDetalle.relacionEstudiante')->where('docEstado', 1)
            ->whereHas('relacionDetalle', function($q){
                $q->whereHas('relacionProgramacion', function($qw){
                    $qw->where('nroPanel', 'Primer Panel');
                });
            })->where('id', $id)->get();
        return response()->json($docente, 200);
    }
    public function filtroDocenteSegundoPanel($id)
    {
        $docente = Docente::with('relacionCarrera', 'relacionSolicitud.relacionEstudiante', 'relacionAsignacion.relacionEstudiante', 'relacionDetalle.relacionProgramacion', 'relacionDetalle.relacionEstudiante')->where('docEstado', 1)
            ->with(['relacionDetalle.relacionProgramacion' => function ($q) {
                $q->where('nroPanel', 'Segundo Panel');
            }])->where('id', $id)->get();
        return response()->json($docente, 200);
    }
    public function filtroDocenteTercerPanel($id)
    {
        $docente = Docente::with('relacionCarrera', 'relacionSolicitud.relacionEstudiante', 'relacionAsignacion.relacionEstudiante', 'relacionDetalle.relacionProgramacion', 'relacionDetalle.relacionEstudiante')->where('docEstado', 1)
            ->with(['relacionDetalle.relacionProgramacion' => function ($q) {
                $q->where('nroPanel', 'Tercer Panel');
            }])->where('id', $id)->get();
        return response()->json($docente, 200);
    }
    public function docenteDesactivado()
    {
        return Docente::where('docEstado', '0')->when(request('search'), function ($query) {
            $query->where('docPaterno', 'like', '%' . request('search') . '%')->orwhere('docMaterno', 'like', '%' . request('search') . '%');
        })->orderBy('id', 'desc')->paginate(5);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_carrera' => 'required',
            'docNombre' => 'required|string',
            'docPaterno' => 'required|string',
            'docMaterno' => 'required|string',
            'docCelular' => 'required|numeric',
            'docGrado' => 'required',
        ]);
        $docente = new Docente();
        $docente->id_carrera = $request->id_carrera;
        $docente->docNombre = $request->docNombre;
        $docente->docPaterno = $request->docPaterno;
        $docente->docMaterno = $request->docMaterno;
        $docente->docCelular = $request->docCelular;
        $docente->docGrado = $request->docGrado;
        if ($docente->save()) {
            return response()->json($docente, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'id_carrera' => 'required',
            'docNombre' => 'required',
            'docPaterno' => 'required',
            'docMaterno' => 'required',
            'docCelular' => 'required',
            'docGrado' => 'required',
        ]);

        $docente = Docente::findOrFail($id);
        $docente->id_carrera = $request->id_carrera;
        $docente->docNombre = $request->docNombre;
        $docente->docPaterno = $request->docPaterno;
        $docente->docMaterno = $request->docMaterno;
        $docente->docCelular = $request->docCelular;
        $docente->docGrado = $request->docGrado;
        if ($docente->update()) {
            return response()->json($docente, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor ',
                'status_code' => 500
            ], 500);
        }
    }

    public function desactivar($id)
    {

        $docente = Docente::findOrFail($id);
        $docente->docEstado = 0;
        if ($docente->update()) {
            return response()->json([
                'message' => 'Se ha desactivado exitosamente',
                'status_code' => 200
            ], 200);
        } else {

            return response()->json([
                'message' => 'Ocurrio un error, intentelo otra vez por favor',
                'status_code' => 500,
            ], 500);
        }
    }
    public function activar($id)
    {

        $docente = Docente::findOrFail($id);
        $docente->docEstado = 1;
        if ($docente->update()) {
            return response()->json([
                'message' => 'Se ha activado exitosamente',
                'status_code' => 200
            ], 200);
        } else {

            return response()->json([
                'message' => 'Ocurrio un error, intentelo otra vez por favor',
                'status_code' => 500,
            ], 500);
        }
    }
}
