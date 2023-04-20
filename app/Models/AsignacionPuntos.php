<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsignacionPuntos extends Model
{
    use HasFactory;

    protected $table = 'asignacion_puntos';
    protected $fillable = [
        'id',
        'id_asignacion_evento',
        'id_horario_docente',
        'cantidad_puntos'
    ];

    public function relacionAsignacion(){
        return $this->belongsTo(AsignacionEvento::class, 'id_asignacion_evento');
    }
    public function relacionHorario(){
        return $this->belongsTo(HorarioDocente::class, 'id_horario_docente');
    }
}
