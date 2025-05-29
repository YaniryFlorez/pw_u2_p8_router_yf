<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>El Producto se ha Guardado</h1>
    </div>
    <label for="id_codigo">Codigo</label>
    <input v-model="nuevoCodigo" id="id_codigo" type="text" />
    <label for="id_nombre">Nombre</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_precio">Precio</label>
    <input v-model="nuevoPrecio" id="id_precio" type="float" />
    <label for="id_caducidad">Fecha Caducidad</label>
    <input v-model="nuevaCaducidad" id="id_caducidad" type="date" />
    <label for="id_descripcion">Descripcion</label>
    <input v-model="nuevaDescripcion" id="id_descripcion" type="text" />
    <button v-on:click="guardarProducto()">Guardar</button>

    <table class="tabla">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Caducidad</th>
          <th>Descripcion</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody v-if="datos">
        <tr
          v-for="{ codigo, nombre, precio, caducidad, descripcion } in listaP"
          :key="codigo + nombre"
        >
          <td>{{ codigo }}</td>
          <td>{{ nombre }}</td>
          <td>{{ precio }}</td>
          <td>{{ caducidad }}</td>
          <td>{{ descripcion }}</td>
          <td><button class="op">Ver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaP: [
        { codigo: "", nombre: "", precio: "", caducidad: "", descripcion: "" },
      ],
      mostrar: false,
      datos: false,
    };
  },
  methods: {
    guardarProducto() {
      const nuevo = {
        codigo: this.nuevoCodigo,
        nombre: this.nuevoNombre,
        precio: this.nuevoPrecio,
        caducidad: this.nuevaCaducidad,
        descripcion: this.nuevaDescripcion,
      };
      this.listaP.unshift(nuevo);
      this.mostrar = true;
      this.datos = true;
      setTimeout(() => {this.mostrar = false;this.limpiar();}, 3000);
    },
    limpiar() {
       this.nuevoCodigo="";
        this.nuevoNombre="";
       this.nuevoPrecio="";
         this.nuevaCaducidad="";
         this.nuevaDescripcion="";
    },
  },
};
</script >

<style scoped>
.container {
  background: #e4e0e0;
  border: 1px solid;
  border-radius: 12px;
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 17px;
}

input {
  background: #eaeff8;
  color: #0f1522;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 52px;
  font-size: 17px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
button {
  background: #5d5f62;
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
/* Estilo para la tabla */
.tabla {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

.tabla th,
.tabla td {
  border: 1px solid #b0c4de;
  padding: 10px;
  text-align: left;
  font-size: 15px;
}

.tabla th {
  background-color: #b1b9c5;
  color: #1f2d4d;
  font-weight: bold;
}

.tabla tr:nth-child(even) {
  background-color: #f2f6fa;
}
.op {
  font-size: 13px;
  width: auto;
  margin: 12px;
}
</style>