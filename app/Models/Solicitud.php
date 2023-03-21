<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Solicitud extends Model
{
    use HasFactory;
    protected $table = 'solicituds';
    protected $fillable = [
        'id',
        'id_estudiante',
        'id_docente',
        'id_modalidad',
        'solFecha',
        'solNumeroRuta',
        'envioSolicitud',
        'respuestaSolicitud'
    ];

    public function relacionEstudiante(){
        return $this->belongsTo(Estudiante::class,'id_estudiante');
    }
    public function relacionDocente(){
        return $this->belongsTo(Docente::class,'id_docente');
    }
    public function relacionModalidad(){
        return $this->belongsTo(Modalidad::class,'id_modalidad');
    }
    public $timestamps = false;
}
