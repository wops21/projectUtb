<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramacionDetalleFinal extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function relacionTribunal(){
        return $this->belongsTo(Docente::class,'id_tribunal');
    }
    public function relacionProgramacion(){
        return $this->belongsTo(Programacion::class,'id_programacion');
    }
    public function relacionEstudiante(){
        return $this->belongsTo(Estudiante::class,'id_estudiante');
    }
}
