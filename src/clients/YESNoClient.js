import axios from "axios";
 
const consultarRespuesta = async () => {
    const respuesta = axios.get('https://yesno.wtf/api').then(r => r.data);
    console.log();
    return respuesta;
}
//await y async solo deben sino en axios ya tiene incluido await
//se debe poner en funciones fachada el metodo que si se comsume desde fuera ya a tener la palabra export
 
export const consultarRespuestaFachada = async () => {
    return await consultarRespuesta();
}