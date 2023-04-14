<?php

use Illuminate\Support\Facades\Route;

Route::post('oauth/token', '\Laravel\Passport\Http\Controllers\AccessTokenController@issueToken');

Route::group(['prefix' => 'auth'], function () {
  Route::post('register', [App\Http\Controllers\AuthController::class, 'register']);

  Route::post('login', [App\Http\Controllers\AuthController::class, 'login']);
  Route::get('getEstudiantes', [App\Http\Controllers\EstudianteController::class, 'getEstudiantes']);
  Route::post('reset-password-request', [App\Http\Controllers\AuthController::class, 'resetPasswordRequest']);
  Route::post('reset-password', [App\Http\Controllers\AuthController::class, 'resetPassword']);

  Route::group(['middleware' => 'auth:api'], function () {

    Route::get('profile',  [App\Http\Controllers\AuthController::class, 'profile']);
    
    Route::get('logout',  [App\Http\Controllers\AuthController::class, 'logout']);
    Route::get('filtroSolicitud', [App\Http\Controllers\SolicitudController::class, 'filtroSolicitud']);

    Route::get('solicitudes', [App\Http\Controllers\SolicitudController::class, 'index']);

    Route::get('getAllPanel1', [App\Http\Controllers\ProgramacionController::class, 'getAllPanel1']);
    //  Route::get('profile', 'AuthController@profile');
  });
});

Route::group(['middleware' => 'auth:api'], function () {
  Route::group(['middleware' => 'scope:administratorMain'], function () {
    Route::get('getAllPanel1', [App\Http\Controllers\ProgramacionController::class, 'getAllPanel1']);
    //Route::apiResource('docentes',App\Http\Controllers\DocenteController::class);
    Route::resource('carreras', App\Http\Controllers\CarreraController::class);
    Route::post('carreras/{carrera}', [\App\Http\Controllers\CarreraController::class, 'update']);
    Route::post('modalidades/{modalidad}', [App\Http\Controllers\ModalidadController::class, 'update']);
    Route::apiResource('modalidades', App\Http\Controllers\ModalidadController::class);
    //Route::get('solicitudes',[App\Http\Controllers\SolicitudController::class, 'index']);
    Route::get('filtroEstudianteDash', [App\Http\Controllers\EstudianteController::class, 'filtroEstudianteDash']);
    //filtros
    Route::get('getCarreraEstudiante/{id}', [App\Http\Controllers\EstudianteController::class, 'getCarreraEstudiante']);
    Route::get('getCarreraDocente/{id}', [App\Http\Controllers\DocenteController::class, 'getCarreraDocente']);
    Route::get('getDocenteModal', [App\Http\Controllers\DocenteController::class, 'getDocenteModal']);
    Route::get('getHistorialEstudiante/{id}', [App\Http\Controllers\EstudianteController::class, 'getHistorialEstudiante']);
    Route::get('getHistorialDocente/{id}', [App\Http\Controllers\DocenteController::class, 'getHistorialDocente']);
    //docentes
    Route::get('getDocentes', [App\Http\Controllers\DocenteController::class, 'getDocentes']);
    Route::get('docentesInactivados', [App\Http\Controllers\DocenteController::class, 'docenteDesactivado']);
    Route::get('docentes', [App\Http\Controllers\DocenteController::class, 'index']);
    Route::put('desactivarDocente/{id}', [App\Http\Controllers\DocenteController::class, 'desactivar']);
    Route::put('activarDocente/{id}', [App\Http\Controllers\DocenteController::class, 'activar']);
    Route::post('docentes/{id}', [App\Http\Controllers\DocenteController::class, 'update']);
    Route::post('docentes', [App\Http\Controllers\DocenteController::class, 'store']);
    //docente filtro
    Route::get('filtroDocente', [App\Http\Controllers\DocenteController::class, 'filtroDocente']);
    Route::get('filtroDocentePrimerPanel/{id}', [App\Http\Controllers\DocenteController::class, 'filtroDocentePrimerPanel']);
    Route::get('filtroDocenteSegundoPanel/{id}', [App\Http\Controllers\DocenteController::class, 'filtroDocenteSegundoPanel']);
    Route::get('filtroDocenteTercerPanel/{id}', [App\Http\Controllers\DocenteController::class, 'filtroDocenteTercerPanel']);
    //estudiantes
    Route::get('estudiantesCarrera', [App\Http\Controllers\EstudianteController::class, 'getEstudiantesCarrera']);
    Route::get('estudiantesInactivos', [App\Http\Controllers\EstudianteController::class, 'estudiantesInactivos']);
    Route::post('estudiantes', [App\Http\Controllers\EstudianteController::class, 'store']);
    Route::post('estudiantes/{id}', [App\Http\Controllers\EstudianteController::class, 'update']);
    Route::put('desactivar/{id}', [App\Http\Controllers\EstudianteController::class, 'desactivar']);
    Route::put('activar/{id}', [App\Http\Controllers\EstudianteController::class, 'activar']);

    //Solicitudes
    Route::put('envioSolicitud/{id}', [App\Http\Controllers\SolicitudController::class, 'envioSolicitud']);
    Route::put('respuestaSolicitud/{id}', [App\Http\Controllers\SolicitudController::class, 'respuestaSolicitud']);
    Route::delete('solicitudes/{id}', [App\Http\Controllers\SolicitudController::class, 'destroy']);
    Route::get('solicitudesAprobadas', [App\Http\Controllers\SolicitudController::class, 'solicitudesAprobadas']);
    //filtros
    //Route::get('filtroSolicitud', [App\Http\Controllers\SolicitudController::class, 'filtroSolicitud']);
    //
    Route::post('solicitudes', [App\Http\Controllers\SolicitudController::class, 'store']);
    Route::post('solicitudes/{id}', [App\Http\Controllers\SolicitudController::class, 'update']);
    Route::put('desactivarSol/{id}', [App\Http\Controllers\SolicitudController::class, 'desactivarSol']);
    Route::get('getEstudianteSolicitud/{id}', [App\Http\Controllers\EstudianteController::class, 'getEstudianteSolicitud']);
    Route::get('getEstudianteSolicitudModal', [App\Http\Controllers\EstudianteController::class, 'getEstudianteSolicitudModal']);

    //Modalidades

    Route::put('modalidades/{id}', [App\Http\Controllers\ModalidadController::class, 'update']);
    Route::delete('modalidades/{id}', [App\Http\Controllers\ModalidadController::class, 'destroy']);


    //asignaciones
    Route::get('asignaciones', [App\Http\Controllers\AsignacionController::class, 'index']);
    Route::post('asignaciones', [App\Http\Controllers\AsignacionController::class, 'store']);
    Route::post('asignaciones/{id}', [App\Http\Controllers\AsignacionController::class, 'update']);
    Route::get('asignacionesAprobadas', [App\Http\Controllers\AsignacionController::class, 'asignacionAprobada']);
    Route::put('envioAsignacion/{id}', [App\Http\Controllers\AsignacionController::class, 'envioAsignacion']);
    Route::put('respuestaAsignacion/{id}', [App\Http\Controllers\AsignacionController::class, 'respuestaAsignacion']);
    Route::put('desactivarAsignacion/{id}', [App\Http\Controllers\AsignacionController::class, 'desactivarAsignacion']);
    Route::delete('asignaciones/{id}', [App\Http\Controllers\AsignacionController::class, 'destroy']);
    Route::get('getEstudianteAsignacion/{id}', [App\Http\Controllers\EstudianteController::class, 'getEstudianteAsignacion']);
    Route::get('getEstudianteAsignacionModal', [App\Http\Controllers\EstudianteController::class, 'getEstudianteAsignacionModal']);

    //filtros
    Route::get('filtroAsignacion', [App\Http\Controllers\AsignacionController::class, 'filtroAsignacion']);
    //
    //Programaciones

    Route::get('getPanel1', [App\Http\Controllers\ProgramacionController::class, 'getPanel1']);
    Route::post('programacionesP1', [App\Http\Controllers\ProgramacionController::class, 'store']);
    Route::put('programaciones/{id}', [App\Http\Controllers\ProgramacionController::class, 'update']);
    Route::delete('programaciones/{id}', [App\Http\Controllers\ProgramacionController::class, 'destroy']);

    //panel1
    Route::put('actaRespuestaP1/{id}', [App\Http\Controllers\ProgramacionController::class, 'actaRespuestaP1']);
    Route::put('solicitarCorrecionP1/{id}', [App\Http\Controllers\ProgramacionController::class, 'solicitarCorrecionP1']);
    Route::put('confirmarCartaPro/{id}', [App\Http\Controllers\ProgramacionController::class, 'confirmarCartaP']);
    Route::put('actaRespuesta/{id}', [App\Http\Controllers\ProgramacionController::class, 'actaRespuesta']);
    Route::put('solicitudRespuesta/{id}', [App\Http\Controllers\ProgramacionController::class, 'solicitudRespuesta']);
    Route::put('completarCorrecion/{id}', [App\Http\Controllers\ProgramacionController::class, 'completarCorrecion']);
    Route::delete('eliminarDetalles/{id}', [App\Http\Controllers\ProgramacionController::class, 'destroyDetalles']);
    Route::post('habilitarPanel2/{id}', [App\Http\Controllers\ProgramacionController::class, 'habilitarPanel2']);

    Route::get('getEstudiantesP1/{id}', [App\Http\Controllers\EstudianteController::class, 'getEstudiantesp1']);

    //observaciones

    Route::post('observaciones', [App\Http\Controllers\ObservacionController::class, 'store']);

    //panel2

    Route::get('getPanel2', [App\Http\Controllers\ProgramacionController::class, 'getPanel2']);
    Route::get('getEstudiantesP2/{id}', [App\Http\Controllers\EstudianteController::class, 'getEstudiantesp2']);
    Route::post('habilitarPanel3/{id}', [App\Http\Controllers\ProgramacionController::class, 'habilitarPanel3']);
    Route::put('deshabilitarPanel3/{id}', [App\Http\Controllers\ProgramacionController::class, 'deshabilitarPanel3']);


    //panel 3
    Route::get('getPanel3', [App\Http\Controllers\ProgramacionController::class, 'getPanel3']);
    Route::get('getEstudiantesp3/{id}', [App\Http\Controllers\EstudianteController::class, 'getEstudiantesp3']);
    //correlativo
    Route::put('generarCorrelativoSolicitud/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoSolicitud']);
    Route::put('generarCorrelativoCartaDef/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoCartaDef']);
    Route::put('generarCorrelativoInforme/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoInforme']);
    // panel final
    Route::put('generarCorrelativoFinal/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoFinal']);
    Route::put('actaRespuestaFinal/{id}', [App\Http\Controllers\ProgramacionController::class, 'actaRespuestaFinal']);
    Route::put('solicitarInformeFinal/{id}', [App\Http\Controllers\ProgramacionController::class, 'solicitarInformeFinal']);
    Route::put('confirmarCartaPFinal/{id}', [App\Http\Controllers\ProgramacionController::class, 'confirmarCartaPFinal']);
    Route::put('confirmarCartaEmpaste/{id}', [App\Http\Controllers\ProgramacionController::class, 'confirmarCartaEmpaste']);
    ///***correlativos */
    Route::put('generarCorrelativoCartaDefFinal/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoCartaDefFinal']);
    Route::put('generarCorrelativoInformeFinal/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoInformeFinal']);
    Route::put('generarCorrelativoEmpaste/{id}', [App\Http\Controllers\ProgramacionController::class, 'generarCorrelativoEmpaste']);
    Route::post('habilitarEmpaste/{id}', [App\Http\Controllers\ProgramacionController::class, 'habilitarEmpaste']);


    //reportes
    Route::post('/reporteP1Docente/{id}', [App\Http\Controllers\DocenteController::class, 'reporteP1Docente']);
    Route::post('/reporteP2Docente/{id}', [App\Http\Controllers\DocenteController::class, 'reporteP2Docente']);
    Route::post('/reportePaDocente/{id}', [App\Http\Controllers\DocenteController::class, 'reportePaDocente']);
    Route::post('/reporteP3Docente/{id}', [App\Http\Controllers\DocenteController::class, 'reporteP3Docente']);
    Route::post('/reporteAsDocente/{id}', [App\Http\Controllers\DocenteController::class, 'reporteAsDocente']);

    Route::get('/reportePendiente', [App\Http\Controllers\ReporteController::class, 'reportePendiente']);
   
  
  });
});

Route::group(['middleware' => 'auth:api'], function () {
  Route::group(['middleware' => 'scope:administratorSem,administratorMain,user'], function () {
    //asignacion seminarios
    Route::post('/asignacionEvento', [App\Http\Controllers\AsignacionEventoController::class, 'store']);
    Route::get('/userAsignacion', [App\Http\Controllers\AsignacionEventoController::class, 'userAsignacion']);
    
    Route::get('/eventosActivos', [App\Http\Controllers\EventoController::class, 'eventosActivos']);
    Route::get('/allEstudiantes',[App\Http\Controllers\EstudianteController::class, 'getEstudiantesAll']);
    Route::post('/registroEstudiantes',[App\Http\Controllers\EstudianteController::class, 'registroEstudiantes']);
    Route::post('/horarios', [App\Http\Controllers\HorarioController::class, 'store']);
    Route::delete('deleteTable', [App\Http\Controllers\HorarioController::class, 'deleteTable']);
    Route::get('/buscadorHorario', [App\Http\Controllers\HorarioController::class, 'buscarDocente']);
    Route::get('/getParalelo', [App\Http\Controllers\HorarioController::class, 'getParalelo']);
    
  });
});
//admin Event
Route::group(['middleware' => 'auth:api'], function () {
  Route::group(['middleware' => 'scope:administratorMainSem'], function () {
    //tipo eventos
   //eventos
   Route::get('/evento', [App\Http\Controllers\EventoController::class, 'index']);
   Route::post('/evento', [App\Http\Controllers\EventoController::class, 'store']);
   Route::put('/evento/{evento}', [App\Http\Controllers\EventoController::class, 'update']);
   Route::delete('/evento/{evento}', [App\Http\Controllers\EventoController::class, 'destroy']);
   Route::put('/desactivarEvento/{evento}', [App\Http\Controllers\EventoController::class, 'desactivarEvento']);
   Route::put('/activarEvento/{evento}', [App\Http\Controllers\EventoController::class, 'activarEvento']);
   //tipo de evento
   Route::get('/tipoEvento', [App\Http\Controllers\TipoEventoController::class, 'index']);
   Route::post('/tipoEvento', [App\Http\Controllers\TipoEventoController::class, 'store']);
   Route::get('/inscritosEventos',[App\Http\Controllers\AsignacionEventoController::class,'inscritosEventos']);

  });
});

Route::group(['middleware' => 'auth:api'], function () {
  Route::group(['middleware' => 'scope:administratorSem'], function () {
    //tipo eventos
    Route::get('/asignacionEvento', [App\Http\Controllers\AsignacionEventoController::class, 'index']);
    Route::get('/carreras',[App\Http\Controllers\CarreraController::class, 'index']);
    Route::put('/entregarCertificado/{asignacion}', [App\Http\Controllers\AsignacionEventoController::class, 'entregarCertificado']);
    Route::post('/controls',[App\Http\Controllers\ControllerControl::class, 'store']);
  });
});

Route::get('/test/{id}', [App\Http\Controllers\AsignacionEventoController::class, 'totalHoras']);
Route::get('/getQr/{ci}/{asignacion}/{id}',[App\Http\Controllers\QrGenerator::class, 'getQr']);