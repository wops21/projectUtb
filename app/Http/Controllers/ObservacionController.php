<?php

namespace App\Http\Controllers;

use App\Models\ObservacionEstudiante;
use Illuminate\Http\Request;
use Carbon\Carbon;
class ObservacionController extends Controller
{
    //
    public function store(Request $request){
        $now = Carbon::now();
        $fechaActual = $now->format('Y-m-d');

        $observacion = new ObservacionEstudiante();
        $observacion->id_estudiante = $request->id_estudiante;
        $observacion->observacion = $request->observacion;
        $observacion->detalleObservacion = $request->detalleObservacion;
        $observacion->fechaObservacion = $fechaActual;
        if($observacion->save()){
            return response()->json($observacion, 200);
        }else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor',
                'status_code' => 500
            ],500);
        }
    }
}
