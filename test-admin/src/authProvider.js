import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { API_URL } from "./env"

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        console.log(AUTH_LOGIN)
        // ...
    }
    if (type === AUTH_LOGOUT) {
        console.log(AUTH_LOGOUT)

    }
    if (type === AUTH_ERROR) {
        console.log(AUTH_ERROR)
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }

    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
        return Promise.resolve();
    }
}