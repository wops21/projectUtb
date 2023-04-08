<?php

namespace App\Http\Controllers;

use App\Models\AsignacionEvento;
use App\Models\Estudiante;
use App\Models\User;

use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrGenerator extends Controller
{

    public function getQr($id, AsignacionEvento $asignacion, $ci)
    {


        $infoQr = AsignacionEvento::with('relacionEvento', 'relacionEstudianteEvento')
            ->where('idEBycrypt', $ci)->where('id_evento', $asignacion->id)->where('id', $id)
           
            ->get();
        return response()->json($infoQr, 200);
    }
    public function index()
    {
        // QR code with text
        $data['qrcode'] = QrCode::generate('Welcome to Makitweb');

        // Store QR code for download
        QrCode::generate('Welcome to Makitweb', public_path('images/qrcode.svg'));

        //        return view('index',$data);

    }
}
