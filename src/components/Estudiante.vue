<template>
  <div class="container">
    <label for="id_nombre">Nombre</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <label for="id_fecha_nacimiento">Fecha Nacimiento</label>
    <input v-model="nuevaFecha" id="id_fecha_nacimiento" type="date" />
    <label for="id_genero">Genero</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />
    <label for="id_cedula">Cedula</label>
    <input v-model="nuevaCedula" id="id_cedula" type="text" />
    <button v-on:click="agragarEstudiante()">Agregar</button>

    <button v-on:click="obtenerPathVariable()">Obtener PathVariable</button>

    <ul>
      <li
        v-for="{ nombre, apellido, fecha, genero, cedula } in lista"
        :key="nombre"
      >
        Nombre:{{ nombre }}-Apellido:{{ apellido }}- Fecha Nacimiento:{{
          fecha
        }}-Genero:{{ genero }}- Cedula:{{ cedula }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "nuevo",
      lista: [
        { nombre: "Yaniry", apellido: "Florez" },
        { nombre: "Daniel", apellido: "Lopez" },
        { nombre: "Pedro", apellido: "Ruiz" },
        { nombre: "Andrea", apellido: "Rivera" },
        { nombre: "Carlos", apellido: "Vargas" },
        { nombre: "Ana", apellido: "Enriquez" },
        { nombre: "Viviana", apellido: "Lopez" },
      ],
    };
  },
  methods: {
    agragarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        fecha: this.nuevaFecha,
        genero: this.nuevoGenero,
        cedula: this.cedula,
      };
      this.lista.unshift(nuevo);
    },

    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log("Cedula obtenida desde la ruta:", cedula);
      const anio = this.$route.query.anio;
      console.log("anio"+ anio);
      const mes = this.$route.query.mes;
      console.log("mes"+ mes);
    },
  },
  
};
</script >

<style scoped>
.container {
  background: #ffffff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 15px;
}

input {
  background: #81b2fc;
  color: #123fff;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 52px;
  font-size: 17px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
button {
  background: #4279cb;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  width: 120px;
}

ul {
  list-style: none;
  margin-top: 50px;
}
li {
  background: #d2d8de;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 15px;
}
</style>