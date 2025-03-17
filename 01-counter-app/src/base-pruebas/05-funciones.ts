
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

export const saludar2 = ( nombre:string ) => {
    return `Hola, ${ nombre }`;
}


export const getUser = ({uid= 'ABC123', username= 'El_Papi1502'}:{uid?:string, username?:string}) => ({
        uid,
        username
});


// Tarea
export const getUsuarioActivo = ( username:string ) =>({
    uid: 'ABC567',
    username
});




