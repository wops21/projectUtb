<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Modalidad;

class ModalidadController extends Controller
{
    public function index()
    {

        $modalidad = Modalidad::all();

        return response()->json($modalidad, 200);
    }

    public function store(Request $request)
    {
        $modalidad = new Modalidad();

        $modalidad->nombreModalidad = $request->nombreModalidad;

        if ($modalidad->save()) {
            return response()->json($modalidad, 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor',
                'status_code' => 500
            ], 500);
        }
    }

    public function update(Request $request, Modalidad $modalidad)
    {


        $modalidad->nombreModalidad = $request->nombreModalidad;
        if ($modalidad->update()) {
            return response()->json($modalidad, 200);
        } else { 
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor',
                'status_code' => 500
            ], 500);
        }
    }
    public function destroy($id)
    {
        $modalidad = Modalidad::findOrFail($id);
        if ($modalidad->delete()) {
            return response()->json([
                'message' => 'se ha eliminado correctamente',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Ocurrio un error, intente otra vez por favor',
                'status_code' => 500
            ], 500);
        }
    }
}
