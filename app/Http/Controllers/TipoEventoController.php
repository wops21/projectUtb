<?php

namespace App\Http\Controllers;

use App\Models\TipoEvento;
use Illuminate\Http\Request;

class TipoEventoController extends Controller
{
    public function index(){
        $tipo = TipoEvento::all();
        return response()->json($tipo,200);
    }

    public function store(Request $request){
        
        $tipo = new TipoEvento();
        $tipo->tipoEvento = $request->tipoEvento;
        $tipo->save();
        return response()->json($tipo, 200);
    }
    public function update(Request $request, TipoEvento $tipo){
        $tipo->update($request->all());
        return response()->json($tipo,200);
    }
    
}
