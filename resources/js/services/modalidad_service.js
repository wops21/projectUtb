import {http} from './http_service';

export function createModalidad(data){
    return http().post('/modalidades',data);
}

export function loadModalidades(){
    return http().get('/modalidades');
}

export function deleteModalidad(id){
    return http().delete(`modalidades/${id}`);
}

export function updateModalidad(id, data){
    return http().post(`modalidades/${id}`,data);
}