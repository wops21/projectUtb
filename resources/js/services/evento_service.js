import { http } from './http_service';


//main event
///consultas
export function loadEventoActive(page){
    return http().get(`/evento?page=${page}`)
}
export function loadSearchEventA(search){
    return http().get(`/evento?search=${search}`)
}
//eliminar
export function deleteEvento(evento){
    return http().delete(`/evento/${evento}`)
}
export function desactivarEvento(evento){
    return http().put(`/desactivarEvento/${evento}`)
}
///registro
export function createEvento(data){
    return http().post('/evento',data);
}
///editar
export function updateEvento(id,data){
    return http().put(`/evento/${id}`,data);
}
//tipo event
export function loadTipoEvento(){
    return http().get('/tipoEvento');
}
//todos los estudiantes
export function todosEstudiantes(page,carrera,search){
    return http().get(`/todosEstudiantes?page=${page}&carrera=${carrera}&search=${search}`);
}
export function todosAsignados(estudiante){
    return http().get(`/todosAsignados/${estudiante}`);
}
//user evento
//
export function loadEventosActivos(){
    return http().get('/eventosActivos');
}
//usuarios
export function createAsignacionEvento(data){
    return http().post('/asignacionEvento',data);
}
export function loadUserAsignaciones(page){
    return http().get(`/userAsignacion?page=${page}`)
}
export function loadReporteAsignacion(){
    return http().get('/reporteAsignaciones');
}
//encargado asignacion
//buscadores
export function loadEventosPendientesCarreras(carrera, page){
    return http().get(`/asignacionEvento?carrera=${carrera}&page=${page}`);
}
export function loadEventosPendientesSearch(search){
    return http().get(`/asignacionEvento?search=${search}`);
}

export function loadEventosPendientesCarreraSearch(carrera,search){
    return http().get(`/asignacionEvento?carrera=${carrera}&search=${search}`);
}
//entrega de certificado

export function entregarCertificado(asignacion){
    return http().put(`entregarCertificado/${asignacion}`);
}

export function control(data){
    return http().post('/controls',data);
}
///**crear tipo evento */
export function createTipo(data){
    return http().post('/tipoEvento',data);
}
export function deleteTipo(tipo){
    return http().delete(`/tipoEvento/${tipo}`)
}

export function updateTipo(tipo,data){
    return http().put(`/tipoEvento/${tipo}`,data)
}
//qr
export function getQrInfo(id,asignacion,ci){
    return http().get(`/getQr/${ci}/${asignacion}/${id}`);
}

///puntos asignados editar
export function updatePuntos(id, data){
    return http().post(`/asignacionEvento/${id}`,data)
}