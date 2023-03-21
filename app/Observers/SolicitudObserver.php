<?php

namespace App\Observers;

use App\Models\Solicitud;
use Illuminate\Support\Facades\DB;
class SolicitudObserver
{
    /**
     * Handle the Solicitud "created" event.
     *
     * @param  \App\Models\Solicitud  $solicitud
     * @return void
     */
    public function created(Solicitud $solicitud)
    {
        
    }

    /**
     * Handle the Solicitud "updated" event.
     *
     * @param  \App\Models\Solicitud  $solicitud
     * @return void
     */
    public function updated(Solicitud $solicitud)
    {
        //
    }

    /**
     * Handle the Solicitud "deleted" event.
     *
     * @param  \App\Models\Solicitud  $solicitud
     * @return void
     */
    public function deleted(Solicitud $solicitud)
    {
        //
    }

    /**
     * Handle the Solicitud "restored" event.
     *
     * @param  \App\Models\Solicitud  $solicitud
     * @return void
     */
    public function restored(Solicitud $solicitud)
    {
        //
    }

    /**
     * Handle the Solicitud "force deleted" event.
     *
     * @param  \App\Models\Solicitud  $solicitud
     * @return void
     */
    public function forceDeleted(Solicitud $solicitud)
    {
        //
    }
}
