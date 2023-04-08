<?php

namespace App\Http\Controllers;

use App\Models\DocenteInterno;
use Exception;
use Illuminate\Http\Request;

class ControllerControl extends Controller
{
    //

    public function store(Request $request){
      try {
        $items = $request->input('items');
    foreach (json_decode($items) as $item) {
        $docente = new DocenteInterno();
        $docente->a = $item[0];
        $docente->b = $item[1];
        $docente->save();
    }
        return response()->json($items,200);
      }catch(\Exception $e){
        echo $e;
            }
          
      }
}
