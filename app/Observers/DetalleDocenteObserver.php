<?php

namespace App\Observers;

use App\Models\ProgramacionDetalle;

class DetalleDocenteObserver
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
