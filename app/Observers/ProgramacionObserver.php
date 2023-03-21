<?php

namespace App\Observers;

use App\Models\Estudiante;
use App\Models\Programacion;
use App\Models\ProgramacionDetalle;
use App\Models\ProgramacionDetalleEstudiante;
use App\Models\ProgramacionDetalleFinal;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProgramacionObserver
{
    /**
     * Handle the Programacion "created" event.
     *
     * @param  \App\Models\Programacion  $programacion
     * @return void
     */
    public function created(Programacion $programacion)
    {
        $now = Carbon::now();
        $fechaActual = $now->format('Y/m/d');
        $add5 = Carbon::now()->addDay(5);
        $formatAdd5 = $add5->format('Y/m/d');
        $add10 = Carbon::now()->addDay(10);
        $formatAdd10 = $add10->format('Y/m/d');
        $add14 = Carbon::now()->addDay(20);
        $formatAdd14 = $add14->format('Y/m/d');
        $add5E = Carbon::now()->addDay(5);
        $formatAdd5E = $add5E->format('Y/m/d');
        $IdT1 = DB::table('asignacion_tribunals')->where('id_estudiante', $programacion->id_estudiante)
            ->where('asiEstado', '1')->orderBy('id', 'asc')->value('id_tribunal');
        $IdT2 = DB::table('asignacion_tribunals')->where('id_estudiante', $programacion->id_estudiante)
            ->where('asiEstado', '1')->orderBy('id', 'desc')->value('id_tribunal');
     
        if($programacion->nroPanel == 'Primer Panel' || $programacion->nroPanel == 'Segundo Panel'){
            $programacionDetalle = new ProgramacionDetalle();
            $programacionDetalle->id_programacion = $programacion->id;
            $programacionDetalle->id_tribunal = $IdT1;
            $programacionDetalle->id_estudiante = $programacion->id_estudiante;
            $programacionDetalle->fechaLimiteActa = $formatAdd5;
            $programacionDetalle->fechaLimiteInforme =$formatAdd10;
            $programacionDetalle->fechaProgramacionDetalle = $fechaActual;
      
            $programacionDetalle->save();
            // jurado 2
            $programacionDetalle2 = new ProgramacionDetalle();
            $programacionDetalle2->id_programacion = $programacion->id;
            $programacionDetalle2->id_tribunal = $IdT2;
            $programacionDetalle2->id_estudiante = $programacion->id_estudiante;
            $programacionDetalle2->fechaLimiteActa = $formatAdd5;
            $programacionDetalle2->fechaLimiteInforme = $formatAdd10;
        
            $programacionDetalle2->fechaProgramacionDetalle = $fechaActual;
          
            $programacionDetalle2->save();

            $programacionDetalleEstudiante = new ProgramacionDetalleEstudiante();
            $programacionDetalleEstudiante->id_programacion = $programacion->id;
            $programacionDetalleEstudiante->id_estudiante = $programacion->id_estudiante;
            $programacionDetalleEstudiante->fechaLimiteCorrecion = $formatAdd14;
            $programacionDetalleEstudiante->save();
        } elseif($programacion->nroPanel == 'Tercer Panel'){
            $programacionDetalle = new ProgramacionDetalleFinal();
            $programacionDetalle->id_programacion = $programacion->id;
            $programacionDetalle->id_tribunal = $IdT1;
            $programacionDetalle->id_estudiante = $programacion->id_estudiante;
            $programacionDetalle->fechaLimiteEmpaste = $formatAdd5E;
            $programacionDetalle->fechaLimiteActa = $formatAdd5;
            $programacionDetalle->fechaLimiteInforme =$formatAdd10;
            $programacionDetalle->fechaProgramacionDetalle = $fechaActual;

            $programacionDetalle->save();

            // jurado 2
            $programacionDetalle2 = new ProgramacionDetalleFinal();
            

            $programacionDetalle2->id_programacion = $programacion->id;
            $programacionDetalle2->id_tribunal = $IdT2;
            $programacionDetalle2->id_estudiante = $programacion->id_estudiante;
             $programacionDetalle2->fechaLimiteEmpaste = $formatAdd5E;
            $programacionDetalle2->fechaLimiteActa = $formatAdd5;
            $programacionDetalle2->fechaLimiteInforme = $formatAdd10;
        
            $programacionDetalle2->fechaProgramacionDetalle = $fechaActual;
            $programacionDetalle2->save();

            $programacionDetalleEstudiante = new ProgramacionDetalleEstudiante();
            $programacionDetalleEstudiante->id_programacion = $programacion->id;
            $programacionDetalleEstudiante->id_estudiante = $programacion->id_estudiante;
            $programacionDetalleEstudiante->fechaLimiteCorrecion = $formatAdd14;
            $programacionDetalleEstudiante->save();
          
        }
      
        // estudiante detalle
        switch($programacion->nroPanel){
            case('Primer Panel'):
                $estudiante = Estudiante::findOrFail($programacion->id_estudiante);
         $estudiante->habilitacion = 'primer panelR';
         $estudiante->update(); 
         break;
         case('Segundo Panel'):
            $estudiante = Estudiante::findOrFail($programacion->id_estudiante);
         $estudiante->habilitacion = 'segundo panelR';
         $estudiante->update(); 
         break;
         case('Tercer Panel'):
              $estudiante = Estudiante::findOrFail($programacion->id_estudiante);
            $estudiante->habilitacion = 'tercer panelR';
            $estudiante->update();  
            default: ;
        }
    }

    /**
     * Handle the Programacion "updated" event.
     *
     * @param  \App\Models\Programacion  $programacion
     * @return void
     */
    public function updated(Programacion $programacion)
    {
       

        $id_estu = DB::table('programacions')->where('id', $programacion->id)->limit(1)->value('id_estudiante');
        $es_panel = DB::table('programacions')->where('id', $programacion->id)->limit(1)->value('nroPanel');
      
        $nroProAc = DB::table('programacion_detalles')->where('id_programacion',$programacion->id)->where('actaRespuesta','completado')->count();
        $habilitacion = DB::table('estudiantes')->where('id',$programacion->id_estudiante)->value('habilitacion');
        

            switch($habilitacion){
                case('segundo panelP'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                $estudiante->esFinal = 'programar defensa segundo panel';
                $estudiante->update();
                break;
                case('tercer panelP'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                    $estudiante->esFinal = 'solicitar correcion segundo panel';
                    $estudiante->update();
                break;
                case('Tercer Panel'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                    $estudiante->esFinal = 'solicitar correcion tercer panel';
                    $estudiante->update();
    
                    default: return 'error';
            
          }   
    }

    /**
     * Handle the Programacion "deleted" event.
     *
     * @param  \App\Models\Programacion  $programacion
     * @return void
     */
    public function deleting(Programacion $programacion)
    {
        $idEstudiante = DB::table('programacions')->where('id',$programacion->id)->value('id_estudiante');
        $nroPanel = DB::table('programacions')->where('id',$programacion->id)->value('nroPanel');

        

        switch($nroPanel){
            case('Primer Panel'):
            $estudiante = Estudiante::findOrFail($idEstudiante);
            $estudiante->habilitacion = 'primer panelP';
            $estudiante->esFinal = 'realizar programacion primer panel';
            $estudiante->update();
        break;
        case('Segundo Panel'):
            $estudiante = Estudiante::findOrFail($idEstudiante);
            $estudiante->habilitacion = 'segundo panelP';
            $estudiante->esFinal = 'realizar programacion segundo panel';
            $estudiante->update();
        break;      
       case('Tercer Panel'):
        $estudiante = Estudiante::findOrFail($idEstudiante);
            $estudiante->habilitacion = 'tercer panelP';
            $estudiante->esFinal = 'realizar programacion tercer panel';
            $estudiante->update();
            default: response()->json(["message" => "no se encontro nada", "status_code" => 200]);
        }
    }

    /**
     * Handle the Programacion "restored" event.
     *
     * @param  \App\Models\Programacion  $programacion
     * @return void
     */
    public function restored(Programacion $programacion)
    {
        //
    }

    /**
     * Handle the Programacion "force deleted" event.
     *
     * @param  \App\Models\Programacion  $programacion
     * @return void
     */
    public function forceDeleted(Programacion $programacion)
    {
        //
    }
}
