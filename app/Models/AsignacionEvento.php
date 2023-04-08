<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AsignacionEvento extends Model
{
    use HasFactory;

    protected $table = 'asignacion_eventos';
    protected $fillable = [
        'id_estudiante',
        'id_evento',
        'fechaAsignacion',
        'fechaEntrega',
        'asiEstado',
        'created_at',
        'updated_at',
    ];
    protected $hidden = ['idEBycrypt','asiEstado','fechaEntrega','id_estudiante'];
    public function relacionEvento(){
        return $this->belongsTo(Evento::class, 'id_evento');
    }

    public function relacionEstudiante(){
        return $this->belongsTo(Estudiante::class, 'id_estudiante');
    }
    public function relacionEstudianteEvento(){
        return $this->belongsTo(Estudiante::class, 'id_estudiante')->select(['id', 'esNombres', 'esPaterno', 'esMaterno']);

    }
    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->setTimeZone('America/La_Paz')->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->setTimeZone('America/La_Paz')->format('Y-m-d H:i:s');
    }

}
