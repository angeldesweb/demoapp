import { writable } from 'svelte/store';

let authInfo = {
    email:'',
    role:'',
    isAuth:false
}

export const AuthStore = () => {
    const { subscribe , update , set } = writable(authInfo);
    return {
        subscribe,
        authUser: (args) => update(store => (store = {...store,...args,auth:true})),
        closeSession: () => set(authInfo)
    }
}