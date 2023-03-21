import {http} from './http_service';


export function loadDefensasPanel1(carrera, page){
    return http().get(`getPanel1?carrera=${carrera}&page=${page}`);
}

export function loadDefensasPanel1Search(carrera, search){
    return http().get(`getPanel1?carrera=${carrera}&search=${search}`);
}
export function createProgramacionP1(data){
    return http().post('/programacionesP1',data);
}

export function solicitarCorrecion(id){
    return http().put(`solicitarCorrecionP1/${id}`);
}
export function confirmarCartaPro(id){
    return http().put(`confirmarCartaPro/${id}`);
}

export function actaRespuesta(id){
    return http().put(`actaRespuesta/${id}`);
}

export function solicitudRespuesta(id){
    return http().put(`solicitudRespuesta/${id}`);
}

export function completarCorrecion(id){
    return http().put(`completarCorrecion/${id}`)
}

export function eliminarDetalles(id){
    return http().delete(`eliminarDetalles/${id}`);
}

export function habilitarPanel2(id,data){
    return http().post(`habilitarPanel2/${id}`,data);
}

export function deshabilitarPanel2(id){
    return http().put(`deshabilitarPanel2/${id}`);
}
//panel 1
export function generarCorrelativoCartaDef(id){
    return http().put(`generarCorrelativoCartaDef/${id}`);
}

export function generarCorrelativoInforme(id){
    return http().put(`generarCorrelativoInforme/${id}`);
}

//panel 2

export function loadDefensasPanel2(carrera, page){
    return http().get(`getPanel2?carrera=${carrera}&page=${page}`);
}
export function loadDefensasPanel2Search(carrera, search){
    return http().get(`getPanel2?carrera=${carrera}&search=${search}`);
}
export function habilitarPanel3(id, data){
    return http().post(`habilitarPanel3/${id}`, data);
}

export function deshabilitarPanel3(id){
    return http().put(`deshabilitarPanel3/${id}`);
}

//panel 3
export function loadDefensasPanel3(carrera, page){
    return http().get(`getPanel3?carrera=${carrera}&page=${page}`);
}
export function loadDefensasPanel3Search(carrera, search){
    return http().get(`getPanel3?carrera=${carrera}&search=${search}`);
}
export function generarCorrelativoFinal(id){
    return http().put(`generarCorrelativoFinal/${id}`);
}
export function actaRespuestaFinal(id){
    return http().put(`actaRespuestaFinal/${id}`);
}
export function solicitarInformeFinal(id){
    return http().put(`solicitarInformeFinal/${id}`);
}
export function confirmarCartaPFinal(id){
    return http().put(`confirmarCartaPFinal/${id}`);
}
export function confirmarCartaEmpaste(id){
    return http().put(`generarCorrelativoFinal/${id}`);
}
export function generarCorrelativoCartaDefFinal(id){
    return http().put(`generarCorrelativoCartaDefFinal/${id}`);
}
export function generarCorrelativoInformeFinal(id){
    return http().put(`generarCorrelativoInformeFinal/${id}`);
}
export function generarCorrelativoEmpaste(id){
    return http().put(`generarCorrelativoEmpaste/${id}`);
}
export function habilitarEmpaste(id,data){
    return http().post(`habilitarEmpaste/${id}`,data);
}

