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
        $docente->c = $item[2];
        $docente->d = $item[3];
        $docente->ex = $item[4];
        $docente->fx = $item[5];
        $docente->gx = $item[6];
        $docente->hx = $item[7];
        $docente->ix = $item[8];
        $docente->save();
    }
        return response()->json($items,200);
      }catch(\Exception $e){
        echo $e;
            }
          
      }
}
