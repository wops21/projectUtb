import { http } from './http_service';


export function createHorario(data){
    return http().post('/horarios',data);
}
export function deleteTable(){
    return http().delete('/deleteTable');
}
export function buscadorHorario(uni,carre,sem,tur,par){
    return http().get(`/buscadorHorario?uni=${uni}&carre=${carre}&sem=${sem}&tur=${tur}&par=${par}`)
}
export function getParalelo(uni,carre,sem,tur){
    return http().get(`getParalelo?uni=${uni}&carre=${carre}&sem=${sem}&tur=${tur}`)
}