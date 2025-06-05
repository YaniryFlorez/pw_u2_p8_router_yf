<template>
  <h3>Selecciona el Pkemon Correcto</h3>
  <PokemonImage :pokemonId="15" :mostrarImg="false" />
  <PokemonOption :pokemons="vectorPokemons"/>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOption from "@/components/PokemonOption.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonClient";
export default {
  data() {
    return {
      vectorPokemons: [],
    };
  },
  components: {
    PokemonImage,
    PokemonOption,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemons = opciones;
      console.log(opciones);
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
</style>