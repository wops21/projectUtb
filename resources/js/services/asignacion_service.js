import {http} from './http_service';

export function createAsignacion(data){
    return http().post('/asignaciones',data);
}

export function loadAsignaciones(carrera,page){
    return http().get(`filtroAsignacion?carrera=${carrera}&page=${page}`);
}
export function loadAsignacionesSearch(carrera,search){
    return http().get(`filtroAsignacion?carrera=${carrera}&search=${search}`);
}
export function loadAsignacionesAprobadasSearch(search){
    return http().get(`asignacionesAprobadas?search=${search}`);
}

export function loadAsignacionesAprobadas(page){
    return http().get(`asignacionesAprobadas?page=${page}`);
}
export function desactivarAsignacion(id){
    return http().put(`desactivarAsignacion/${id}`);
}
export function envioAsignacion(id){
    return http().put(`envioAsignacion/${id}`);
}

export function respuestaAsignacion(id){
    return http().put(`respuestaAsignacion/${id}`);
}

export function deleteAsignacion(id){
    return http().delete(`asignaciones/${id}`)
}
export function updateAsignacion(id, data){
    return http().post(`asignaciones/${id}`, data);
}