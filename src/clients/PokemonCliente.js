import axios from 'axios';

const obtenerPokemon = async (id) => {
  try {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      nombre: respuesta.data.name,
      imagen: respuesta.data.sprites.other['official-artwork'].front_default,
    };
  } catch (error) {
    console.error("Error al obtener Pokémon:", error);
    return null;
  }
};

export const obtenerPokemonFachada = async (id) => {
  return await obtenerPokemon(id);
};
