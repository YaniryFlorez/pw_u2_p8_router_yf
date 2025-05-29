<template>
  <Estudiante />
</template>

<script>
import Estudiante from '@/components/Estudiante.vue';
export default {
    components:{
        Estudiante,
           },

     methods: {
        obtenerPathVariable() {
            const cedula = this.$route.params.cedula;
            console.log("Cedula obtenida desde la ruta:", cedula);

            const anio =this.$route.query.anio;
            console.log("Año ", anio);
            const mes = this.$route.query.mes;
            console.log("Mes ", mes);
        }
      },

    }
</script>

<style>
</style>