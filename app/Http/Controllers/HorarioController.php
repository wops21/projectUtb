<?php

namespace App\Http\Controllers;

use App\Models\HorarioDocente;
use Illuminate\Http\Request;

class HorarioController extends Controller
{

    public function getParalelo(){
        $buscador = HorarioDocente::when(request('uni'), function ($q) {
            $q->where('unidad', 'like', '%' . request('uni') . '%');
        })
            ->when(request('carre'), function ($q) {
                $q->where('id_carrera', request('carre'));
            })
            ->when(request('sem'), function ($q) {
                $q->where('semestre', request('sem'));
            })
            ->when(request('tur'), function ($q) {
                $q->where('turno', request('tur'));
            })
            ->orderBy('paralelo', 'asc')
            ->get(); 
        $paralelos = [];
        foreach ($buscador->unique('paralelo') as $fila) {
            $paralelo = $fila->paralelo;
            $paralelos[] = [
                'paralelo' => $paralelo,
            
            ];
        }
        return response()->json($paralelos, 200);
     
    }
    public function buscarDocente(){
        $buscador = HorarioDocente::when(request('uni'),
        function($q){
            $q->where('unidad', 'like', '%' . request('uni').'%');
        }
        )->when(request('carre'),
        function($q){
            $q->where('id_carrera', request('carre'));
        }
        )->when(request('sem'),
        function($q){
            $q->where('semestre', request('sem'));
        }
        )->when(request('tur'),
        function($q){
            $q->where('turno', request('tur'));
        }
        )->when(request('par'),
        function($q){
            $q->where('paralelo', request('par'));
        }
        )->orderBy('id','desc')->get();
        return response()->json($buscador,200);
    }
    public function store(Request $request)
    {

        $items = $request->input('items');
        foreach (json_decode($items) as $item) {
            $horario = new HorarioDocente();
            $horario->id_carrera = $item->carrera;
            $horario->codigoH = $item->codigo;
            $horario->nombreMateria = $item->materno;
            $horario->docente = $item->docente;
            $horario->lunes = $item->lunes;
            $horario->martes = $item->martes;
            $horario->miercoles = $item->miercoles;
            $horario->jueves = $item->jueves;
            $horario->viernes = $item->viernes;
            $horario->sabado = $item->sabado;
            $horario->semestre = $item->semestre;
            $horario->paralelo = $item->paralelo;
            $horario->turno = $item->turno;
            $horario->unidad = $item->unidad;
            $horario->save();
        }
        return response()->json($items, 200);
    }
    public function deleteTable()
    {
        if (HorarioDocente::truncate()) {
            return response()->json([
                "message" => "se ha eliminado exitosamente",
                "status_code" => 200
            ], 200);
        } else {
            return response()->json(["message" => "hubo un error", "status_code" => 500], 500);
        }
    }
}
