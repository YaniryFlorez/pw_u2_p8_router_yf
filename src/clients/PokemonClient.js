import axios from 'axios';

const consumirPokemon=(id)=>{
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(rep => rep.data);
    
    return respuesta;

}