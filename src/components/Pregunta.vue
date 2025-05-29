<template>
    <div class="container">
        <img v-if="imagen" :src="imagen" alt="No se pudo cargar" />
        <div class="container-2">
        </div>
        <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
            <p>Recuerda terminar con un signo de pregunta (?)</p>
           <div v-if="esValida">
             <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>
            <h1>{{ imagen }}</h1>

           </div>
 
        </div>
    </div>
</template>
 
<script>
import {consultarRespuestaFachada} from '@/clients/YESNoClient.js';
export default {
    data() {
        return {
            pregunta: null,
            respuesta: null,
            imagen:null,
            esValida: false,
        };
    },
    watch: {
        pregunta(value, oldValue) {
          this.esValida = false;
            if (value.includes('?')) {
              this.esValida = true;
                console.log("Valor actual: " + value);
                console.log("Valor anterior: " + oldValue);
                //Aqui deberia consultar el API
                this.consumirAPI();
            }
        },
    },
 
    methods:{
        async consumirAPI(){
            this.respuesta="Pensando......";
            const res= await consultarRespuestaFachada();
            console.log(res);
            console.log(res.answer);
            console.log(res.image);
            this.respuesta=res.answer;
            this.imagen=res.image;
        }
    }
};
</script>

<style scoped>
.container2,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}
.container2 {
  background-color: rgb(0, 0, 0, 0.7);
}
.pregunta-container {
  position: relative;
}
input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  margin-top: 70px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
input:focus {
  outline: none;
}
p {
  color: white;
  font-size: 25;
}
h1,
h2 {
  color: rgb(51, 226, 95);
}
h2 {
  margin-top: 60px;
}
</style>