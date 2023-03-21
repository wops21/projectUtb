<?php

namespace App\Models;

use Facade\IgnitionContracts\Solution;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Programacion extends Model
{
    use HasFactory;
    protected $table = 'programacions';
    protected $fillabe = [
        'id',
        'id_estudiante',
        'nroPanel',
        'horaDefensa',
        'fechaDefensa',
        'fechaProgramacion',    
    ];
    public $timestamps = false;
    public function relacionEstudiante(){
        return $this->belongsTo(Estudiante::class,'id_estudiante');
    }
    public function relacionDetalle(){
        return $this->hasMany(ProgramacionDetalle::class,'id_programacion');
    }
    public function relacionDetalleEstudiante(){ 
        return $this->hasMany(ProgramacionDetalleEstudiante::class, 'id_programacion');
    }
    public function relacionDetalleFinal(){
        return $this->hasMany(ProgramacionDetalleFinal::class, 'id_programacion');
    }
    

}
