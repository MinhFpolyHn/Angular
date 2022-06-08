export type TypeLoginRequest = {
    email:string,
    password:string
};
export type TypeLoginReponse = {
    accessToken:string,
    user:{
        id:number,
        email:string
    }
};