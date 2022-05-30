import instance from "./api";

export const signInAdmin = (data) => instance.post('/auth/token/login', data)