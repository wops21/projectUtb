import {http} from './http_service';

export function createSolicitud(data){
    return http().post('/solicitudes',data);
}
export function loadSolicitudes(carrera, page){
    return http().get(`/auth/filtroSolicitud?carrera${carrera}&page=${page}`)
}
export function loadSolicitudesSearch(search){
    return http().get(`/solicitudes?search=${search}`)
}
export function loadSolicitudesAprobadas(page){
    return http().get(`/solicitudesAprobadas?page=${page}`)
}
export function loadSolicitudesAprobadasSearch(search){
    return http().get(`/solicitudesAprobadas?search=${search}`)
}
export function updateSolicitud(id,data){
    return http().post(`solicitudes/${id}`,data)
}
export function envioSolicitud(id){
    return http().put(`envioSolicitud/${id}`)
}
export function deleteSolicitud(id){
    return http().delete(`solicitudes/${id}`)
}
export function desactivarSol(id){
    return http().put(`desactivarSol/${id}`)
}

export function respuestaSolicitud(id){
    return http().put(`respuestaSolicitud/${id}`)
}
//Correlativo
export function generarCorrelativoSolicitud(id){
    return http().put(`generarCorrelativoSolicitud/${id}`)
}
export function getSolicitudId(id){
    return http().get(`getSolicitudId/${id}`);
}

//filtros
export function filtroSolicitudes(carrera,search) {
    return http().get(`auth/filtroSolicitud?carrera=${carrera}&search=${search}`);
}


