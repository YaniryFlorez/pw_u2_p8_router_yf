<template>
  <div class="container">
    <img
      class="ocultar"
      v-if="!mostarPokemon"
      :src="imagenUrl"
      alt="Pokemon Imagen no esta disponible"
    />
    <img
      v-if="mostarPokemon"
      :src="imagenUrl"
      alt="Pokemon Image no esta disponible"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarImg: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
         mostarPokemon: this.mostrarImg,
    };
  },
  computed: {
    imagenUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
}
img {
  position: absolute;
  height: 200px;
  right: 42%;
}
.ocultar {
  filter: brightness(0);
}
</style>