<?php

namespace App\Http\Controllers;


use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function eventosActivos(){
        $evento = Evento::where('eventEstado',1)->orderBy('id','desc')->get();
        return response()->json($evento,200);
    }
    public function index(){
        $evento = Evento::with('relacionTipoEvento')->where('eventEstado',1)->when(request('search'), function($q){
            $q->where('nombreEvento','like', '%' . request('search') . '%');
        })->orderBy('created_at','desc')->paginate(10);
         return response()->json($evento, 200);
     }
 
     public function store(Request $request){
   try{
    $request->validate([
      'nombreEvento' => 'required|unique:eventos,nombreEvento',
         'fechaInicio' => 'required',
         'fechaFinal' => 'required',
         'lugar' => 'required',
         'horaAcademica' => 'required',
         'id_tipoEvento' => 'required',
         'orador' => 'required'
     ]);

      $evento = Evento::create($request->all());
     return response()->json($evento, 200);

   }catch(\Exception $e){
        echo $e;
   }
     }
 
     public function update(Request $request, Evento $evento){
        $request->validate([
            'nombreEvento' => 'required|unique:eventos,nombreEvento',
             'fechaInicio' => 'required',
             'fechaFinal' => 'required',
             'lugar' => 'required',
             'horaAcademica' => 'required',
             'id_tipoEvento' => 'required'
         ]);
 
          $evento->update($request->all());
 
          return response()->json($evento, 200);
 
     }
     public function destroy(Evento $evento){
         if($evento->delete()){
             return response()->json([
                 "message" => "se ha eliminado exitosamente",
                 "status_code" => 200,
             ],200);
         } else {
             return response()->json([
                 "message" => 'Ocurrio un error, intentelo otra vez por favor',
                 "status_code" => 500
             ],500);
         }
     }
     public function desactivarEvento(Evento $evento){
        $evento->eventEstado = 0;
        if($evento->update()){
            return response()->json([
                "message" => "se ha desactivado exitosamente",
                "status_code" => 200,
            ],200);
        } else {
            return response()->json([
                "message" => 'Ocurrio un error, intentelo otra vez por favor',
                "status_code" => 500
            ],500);
        }
    }
 
    public function activarEvento(Evento $evento){
        $evento->eventEstado = 1;
        if($evento->update()){
            return response()->json([
                "message" => "se ha activado exitosamente",
                "status_code" => 200,
            ],200);
        } else {
            return response()->json([
                "message" => 'Ocurrio un error, intentelo otra vez por favor',
                "status_code" => 500
            ],500);
        }
    }

}
