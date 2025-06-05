<template>
  <h2>option</h2>
  <div class="container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
     
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
 
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #f0f76f;
  border-radius: 5px;
  border: 1px solid blanchedalmond;
  margin-bottom: 10px;
  cursor: pointer;
  width: 200px;
}
li:hover {
  background-color: #d0f761;
}
</style>