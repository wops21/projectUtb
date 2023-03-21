import store from '../store/modules/service';
import axios from 'axios';
import * as auth from './auth_service';
export function http(){
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            Authorization: 'Bearer '+auth.getAccessToken(),
        }
    })
}