<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ this.numero }}<sup>2</sup>= {{ calCuadrado }}</p>
    <div>
      <button @click="incrementar()">+1</button>
      <button v-on:click="decrementar()">-1</button>
    </div>

    <!--
    <p>{{ numero+1 }}</p>
    <p>{{ 'Mi nombre es:'+texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario }}</p>
    <p>{{ arreglo }}</p>
    1+1
    {{ 1 + 1 }}
    {{ false ? " es verdaddero" : "es falso" }}-->
  </div>
</template>

<script>
export default {
  // props:['title', 'value'],
  props: {
    title: String,
    value: {
      type:Number,
      //requed: true,//es necesario que se envie
      requed: false,
      default:100,
      validattor(value){
        return value>0;
      }
    },

    p1: Boolean,
    p2: Array,
    p3: Object,
    //p4: function,
    p5: Date,
    // p6: Symbol,
  },
  data() {
    return {
      //reactivos
      titulo: "Contador",
      numero: this.value,
      texto: "Yaniry Florez",
      activo: true,
      usuario: {
        nombre: "Yaniry",
        edad: 28,
        genero: "Femenino",
      },
      //arreglo
      arreglo: ["amariilo", "azul"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("entro al metodo");
      return this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    calCuadrado() {
      console.log("entro al metodo computada");
      return this.numero * this.numero;
    },
  },
  created(){
    if(this.value > 0){
      console.log("es corre");
    }else{
      throw new Error("error el valor no puede ser negarivo")
    }
  }
};
</script>

<style>
</style>