<template>
  <div class="container">
      <h2>Busca tu Pokémon Favorito!</h2>
  <Pokemon/>
  </div>

 
</template>

<script>
import Pokemon from "@/components/Pokemon.vue";

export default {
    components: {
        Pokemon,
      
    },  

}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
  background: rgb(145, 215, 246);
}
h2 {
  color: #333;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
}
</style>