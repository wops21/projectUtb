import {http} from './http_service';

export function createCarrera(data){
    return http().post('/carreras',data);
}

export function loadCarreras(){
    return http().get('/carreras');
}

export function deleteCarrera(id){
    return http().delete(`carreras/${id}`);
}

export function updateCarrera(id, data){
    return http().post(`carreras/${id}`,data);
}