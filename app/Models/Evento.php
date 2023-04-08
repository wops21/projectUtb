<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    use HasFactory;
    protected $table = 'eventos';
    protected $fillable = [
        'id',
        'id_tipoEvento',
        'nombreEvento',
        'fechaInicio',
        'fechaFinal',
        'lugar',
        'horaAcademica',
        'eventEstado',
        'orador'
    ];

    public function relacionAsignacionEvento(){
        return $this->hasMany(AsignacionEvento::class, 'id_evento');
    }
    public function relacionTipoEvento(){
        return $this->belongsTo(TipoEvento::class, 'id_tipoEvento');
    }

  
}
