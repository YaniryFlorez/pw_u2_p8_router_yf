<template>
<<<<<<< HEAD
    <div>
        <h1>Selecciona el Pokémon Correcto</h1>
        <h1>{{ mensaje }}</h1>
        <PokemonImage v-if="pokemon" :pokemonId="pokemon.id" :mostrarImagen="mostrar" ref="miHijo1"/>
        <PokemonOption @seleccionado="recibioPadre($event)" :pokemons="this.vectorPokemon" ref="miHijo2"/>

        <button @click="comunicarHijo">Comunicar Hijo</button>
    </div>
=======
  <h3>Selecciona el Pkemon Correcto</h3>
  <PokemonImage :pokemonId="85" :mostrarImg="true" />
  <PokemonOption :pokemons="vectorPokemons"/>
>>>>>>> de45088cefb0c4776356eee11d793d4558c98579
</template>
<script>
import PokemonOption from "@/components/PokemonOption.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import { obtenerOpcionesFachada,obtenerAleatorioFachada } from '@/clients/PokemonClient.js'
export default {
<<<<<<< HEAD
    data() {
        return{
        vectorPokemon: [],
        pokemon: null,
        mostrar: false,
        mensaje: null,
        }
=======
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
      const opciones = await obtenerOpcionesFachada(8);
      this.vectorPokemons = opciones;
      console.log(opciones);
>>>>>>> de45088cefb0c4776356eee11d793d4558c98579
    },
    components: {
        PokemonImage,
        PokemonOption,
    },
    methods: {
        async iniciarJuego() {
            const opciones = await obtenerOpcionesFachada(8);
            this.vectorPokemon = opciones;
            console.log(this.vectorPokemon);
            console.log(this.vectorPokemon);

            //elegir un pokemon
            let pokemonCorrecto = obtenerAleatorioFachada(0,this.vectorPokemon.length);
            this.pokemon= this.vectorPokemon[pokemonCorrecto];
            console.log( this.pokemon.nombre);
        },
        recibioPadre(id){
            console.log("Mensaje recibido desde Hijo")
            console.log("Id recibido del hijo :"+id)
            this.mostrar=true
            this.validarRespuesta(id.atributo)
        },
        validarRespuesta(opcionSelecionada){
            if (opcionSelecionada === this.pokemon.id) {
                this.mensaje="Correcto"
                
            }else{
                this.mensaje="Perdiste el correcto es "+this.pokemon.nombre;
            };
        },
        comunicarHijo(){
            
            console.log(this.$refs.miHijo1.mensaje1)
            this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1"
            console.log(this.$refs.miHijo2.mensaje2)
            this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2"
        },

    },
    mounted() {
        this.iniciarJuego();
    }
}
</script>