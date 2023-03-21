<?php

namespace App\Observers;

use App\Models\Estudiante;
use App\Models\ProgramacionDetalle;
use Illuminate\Support\Facades\DB;

class ProgramacionDetalleObserver
{
    /**
     * Handle the ProgramacionDetalle "created" event.
     *
     * @param  \App\Models\ProgramacionDetalle  $programacionDetalle
     * @return void
     */
    public function created(ProgramacionDetalle $programacionDetalle)
    {
        //
    }

    /**
     * Handle the ProgramacionDetalle "updated" event.
     *
     * @param  \App\Models\ProgramacionDetalle  $programacionDetalle
     * @return void
     */
    public function updated(ProgramacionDetalle $programacionDetalle)
    {
        $idPro = DB::table('programacion_detalles')->where('id', $programacionDetalle->id)->value('id_programacion');

        $id_estu = DB::table('programacions')->where('id', $idPro)->limit(1)->value('id_estudiante');
        $es_panel = DB::table('programacions')->where('id', $idPro)->limit(1)->value('nroPanel');
      
        $nroProAc = DB::table('programacion_detalles')->where('id_programacion',$idPro)->where('actaRespuesta','completado')->count();
        $nroProCo = DB::table('programacion_detalles')->where('id_programacion',$idPro)->where('solicitudInforme','completado')->count();
        
        if($nroProAc == 2){
            switch($es_panel){
                case('Primer Panel'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                $estudiante->esFinal = 'solicitar correcion primer panel';
                $estudiante->update();
                break;
                case('Segundo Panel'):
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
          if($nroProCo == 2){
            switch($es_panel){
                case('Primer Panel'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                $estudiante->esFinal = 'Habilitación para el segundo panel - pendiente';
                $estudiante->update();
                break;
                case('Segundo Panel'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                    $estudiante->esFinal = 'Habilitación para el tercer panel - pendiente';
                    $estudiante->update();
                break;
                case('Tercer Panel'):
                    $estudiante = Estudiante::findOrFail($id_estu);
                    $estudiante->esFinal = 'solicitar correcion tercer panel';
                    $estudiante->update();
    
                    default: return 'error';
            
          }   
          }     
    }

    /**
     * Handle the ProgramacionDetalle "deleted" event.
     *
     * @param  \App\Models\ProgramacionDetalle  $programacionDetalle
     * @return void
     */
    public function deleted(ProgramacionDetalle $programacionDetalle)
    {
        //
    }

    /**
     * Handle the ProgramacionDetalle "restored" event.
     *
     * @param  \App\Models\ProgramacionDetalle  $programacionDetalle
     * @return void
     */
    public function restored(ProgramacionDetalle $programacionDetalle)
    {
        //
    }

    /**
     * Handle the ProgramacionDetalle "force deleted" event.
     *
     * @param  \App\Models\ProgramacionDetalle  $programacionDetalle
     * @return void
     */
    public function forceDeleted(ProgramacionDetalle $programacionDetalle)
    {
        //
    }
}
