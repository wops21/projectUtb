<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReporteController extends Controller
{
    //

    public function reportePendiente(){
    
        $now = Carbon::now();
        $fechaActual = $now->format('Y/m/d');
        $reporte = Solicitud::where("solFechaLimit","<",   $fechaActual)->where('respuestaSolicitud','pendiente')->count();
     //   return $fechaActual;
        return $reporte;
    }
}
