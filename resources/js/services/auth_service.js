import {http} from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store'
export function resetPasswordRequest(user) {
    return http().post('/auth/reset-password-request', user);
}

export function resetPassword(user) {
    return http().post('/auth/reset-password', user);
}

export async function login(user) {
    const response = await http().post('/auth/login', user);
    if (response.status === 200) {
        setToken(response.data);
    }
    return response.data;
}
export function isLoggedIn() {
    const token = localStorage.getItem('larave-vue-spa-token');
    return token != null;
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('larave-vue-spa-token');
}

export function setToken(user){
    const token = jwt.sign({ user: user }, 'laravelvuespaabfjdsafjasljsoftgear2019');
    localStorage.setItem('larave-vue-spa-token', token);
//   this.$store.dispatch('authenticate', user.user);
   store.dispatch("GET_AUTHENTICATE", user.user);
}
export function getAccessToken() {
    const token = localStorage.getItem('larave-vue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}
export function getUserRole() {
    const token = localStorage.getItem('larave-vue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.user.role;
}

