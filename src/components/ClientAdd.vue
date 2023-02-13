<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          class="form-control"
          required
          v-model="cliente.nombre"
        />
      </div>
      <div class="form-group">
        <label for="apellidos">apellidos</label>
        <input
          type="text"
          name="apellidos"
          id="apellidos"
          class="form-control"
          required
          v-model="cliente.apellidos"
        />
      </div>
      <div class="form-group">
        <label for="direccion">direccion</label>
        <input
          type="text"
          name="direccion"
          id="direccion"
          class="form-control"
          required
          v-model="cliente.direccion.localidad"
        />
      </div>
      <button @click="saveClient" class="btn btn-success text-primary">
        Crear
      </button>
    </div>
    <div v-else>
      <h4>El cliente se ha creado</h4>
      <button class="btn btn-success" @click="newClient">Add</button>
    </div>
  </div>
</template>

<script>
import ClientDataService from "../services/ClientDataService";

export default {
  name: "client-add",
  data() {
    return {
      cliente: {
        id: null,
        nombre: "",
        apellidos: "",
        direccion: {
          localidad: "",
        },
      },
      submitted: false,
    };
  },
  methods: {
    newClient() {
      this.submitted = false;
      this.client = {};
    },
    saveClient() {
      console.log("Creando...");
      ClientDataService.create(this.cliente)
        .then((res) => {
          console.log(res.data);
          this.submitted = true;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>