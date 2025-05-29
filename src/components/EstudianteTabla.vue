<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado!!</h1>
    </div>
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

    <table class="tabla">
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Fecha Nacimiento</th>
        <th>Genero</th>
        <th>Cedula</th>
        <th>Acción</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="{ nombre, apellido, fecha, genero, cedula, } in lista" :key="nombre + apellido">
        <td>{{ nombre }}</td>
        <td>{{ apellido }}</td>
        <td>{{ fecha }}</td>
        <td>{{ genero }}</td>
        <td>{{ cedula }}</td>
        <td ><button class="op">Ver</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "nuevo",
      lista: [
        { nombre: "", apellido: "", fecha: "", genero:"", cedula:"" },
       
      ],
      mostrar: false,
    };
  },
  methods: {
    agragarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        fecha: this.nuevaFecha,
        genero: this.nuevoGenero,
        cedula: this.nuevaCedula,
       

      };
      this.lista.unshift(nuevo);
      this.mostrar= true;
      setTimeout(()=>{this.mostrar=false;},3000)
    },
    limpiar(){
     

    },
  },
};
</script >

<style scoped>

.container{
  background: #ffffff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
}

label{
display: block;
color: #333;
text-align: left;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 15px;

}

input{
  background: #81b2fc;
  color: #123fff;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 52px;
  font-size: 17px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
button{
  background: #4279cb;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
  width: 120px;
}

ul{
  list-style: none;
  margin-top: 50px;
  
}
li{
  background: #d2d8de;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 15px;
}
/* Estilo para la tabla */
.tabla {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

.tabla th, .tabla td {
  border: 1px solid #b0c4de;
  padding: 10px;
  text-align: left;
  font-size: 15px;
}

.tabla th {
  background-color: #618ed1;
  color: #fff;
  font-weight: bold;
}

.tabla tr:nth-child(even) {
  background-color: #f2f6fa;
}
.op{
  font-size: 12px;
}


</style>