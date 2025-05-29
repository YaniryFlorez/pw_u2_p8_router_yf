<template>
  <div class="contenedor">
    <div class="card">
      <img v-if="!pokemon" :src="imagenInicial" alt="Imagen inicial" />
      <div v-else>
        <img :src="pokemon.imagen" alt="Imagen Pokémon" />
        <h2>{{ pokemon.nombre }}</h2>
        <p>Experiencia base: {{ pokemon.experiencia }}</p>
      </div>
    </div>
    <div><button @click="cargarPokemon">Mostrar Pokémon</button></div>
  </div>
</template>

<script>
import { obtenerPokemonFachada } from "@/clients/PokemonCliente.js";
import ImgPokemons from "@/assets/ImgPokemons.png";

export default {
  data() {
    return {
      pokemon: null,
      imagenInicial: ImgPokemons,
    };
  },
  methods: {
    async cargarPokemon() {
      const idAleatorio = Math.floor(Math.random() * 151) + 1;
      this.pokemon = await obtenerPokemonFachada(idAleatorio);
    },
  },
};
</script>

<style scoped>
.contenedor {
  text-align: center;
  margin-top: 20px;
}
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 10px;
   width: 250px;
  height: auto;
}
img {
  width: 250px;
  height: auto;
}
button {
  padding: 10px 20px;
  background-color: #99f2a0;
  border: 4px solid #f2ea09;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 19px;
}
</style>
