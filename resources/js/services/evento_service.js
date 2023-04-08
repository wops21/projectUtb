import { http } from './http_service';


//main event
///consultas
export function loadEventoActive(page){
    return http().get(`/evento?page=${page}`)
}
export function loadSearchEventA(search){
    return http().get(`/evento?search=${search}`)
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


//tes
export function getQrInfo(id,asignacion,ci){
    return http().get(`/getQr/${ci}/${asignacion}/${id}`);
}