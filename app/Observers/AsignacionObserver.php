<?php

namespace App\Observers;

use App\Models\AsignacionTribunal;
use App\Models\Estudiante;
use Illuminate\Support\Facades\DB;
class AsignacionObserver
{
    /**
     * Handle the AsignacionTribunal "created" event.
     *
     * @param  \App\Models\AsignacionTribunal  $asignacionTribunal
     * @return void
     */
    public function created(AsignacionTribunal $asignacionTribunal)
    {
        //
        $nroTribunals = DB::table('asignacion_tribunals')->where('id_estudiante', $asignacionTribunal->id_estudiante)->where('asiEstado',1)->count();
        
        if($nroTribunals == 2){
            $estudiante = Estudiante::findOrFail($asignacionTribunal->id_estudiante);
            $estudiante->esAsignacion = 'completado';
            $estudiante->update();
        }
    }

    /**
     * Handle the AsignacionTribunal "updated" event.
     *
     * @param  \App\Models\AsignacionTribunal  $asignacionTribunal
     * @return void
     */
    public function updated(AsignacionTribunal $asignacionTribunal)
    {
        $nroTribunals = DB::table('asignacion_tribunals')->where('id_estudiante', $asignacionTribunal->id_estudiante)
        ->where('cartaRespuesta', 'completado')->where('asiEstado',1)->count('id_tribunal');
        if($nroTribunals == 2){
            $estudiante = Estudiante::findOrFail($asignacionTribunal->id_estudiante);
       
            $estudiante->confirmacionAsignacion = 'completado';
            $estudiante->update();
        }

    }

    /**
     * Handle the AsignacionTribunal "deleted" event.
     *
     * @param  \App\Models\AsignacionTribunal  $asignacionTribunal
     * @return void
     */
    public function deleted(AsignacionTribunal $asignacionTribunal)
    {
        //
    }

    /**
     * Handle the AsignacionTribunal "restored" event.
     *
     * @param  \App\Models\AsignacionTribunal  $asignacionTribunal
     * @return void
     */
    public function restored(AsignacionTribunal $asignacionTribunal)
    {
        //
    }

    /**
     * Handle the AsignacionTribunal "force deleted" event.
     *
     * @param  \App\Models\AsignacionTribunal  $asignacionTribunal
     * @return void
     */
    public function forceDeleted(AsignacionTribunal $asignacionTribunal)
    {
        //
    }
}
