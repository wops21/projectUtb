<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramacionDetalle extends Model
{
    use HasFactory;

    protected $table = 'programacion_detalles';
    protected $fillable = [
        'id',
        'id_programacion',
        'id_tribunal',
        'actaRespuesta',
        'solicitarCorrecion',
        'nroActa',
        'nroActaInforme',
        'nroCartaDefensa',
        'nroCartaSolInforme',
        'fechaLimiteActa',
        'fechaLimiteInformeActa',
        'fechaLimiteCorreciones',
        'fechaCartaRespuesta',
        'fechaActaRespuesta',
        'fechaSolicitarCorrecion'
    ];

    public $timestamps = false;

    public function relacionProgramacion(){
        return $this->belongsTo(Programacion::class,'id_programacion');
    }

    public function relacionTribunal(){
        return $this->belongsTo(Docente::class,'id_tribunal');
    }
    public function relacionEstudiante(){
        return $this->belongsTo(Estudiante::class,'id_estudiante');
    }
}
