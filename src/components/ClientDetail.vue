<template>
  <div v-if="currentClient" class="edit-form">
    <h4>Cliente</h4>
    <form>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          v-model="currentClient.nombre"
        />
      </div>
      <div class="form-group">
        <label for="apellidos">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="apellidos"
          v-model="currentClient.apellidos"
        />
      </div>
      <div class="form-group">
        <label for="direccion">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="direccion"
          v-model="currentClient.direccion.localidad"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2 text-primary" @click="deleteClient">
      Eliminar
    </button>

    <button type="submit" class="badge badge-success text-primary" @click="updateClient">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import ClientDataService from "../services/ClientDataService";

export default {
  name: "client-detail",
  data() {
    return {
      currentClient: null,
      message: "",
    };
  },
  methods: {
    getClient(id) {
      ClientDataService.get(id)
        .then((res) => {
          console.log(res.data.data);
          this.currentClient = res.data.data;
        })
        .catch((e) => console.log(e));
    },
    deleteClient() {
      ClientDataService.delete(this.currentClient.id)
      .then(res => {
        console.log(res.data);
        this.$router.push({name: 'clientes'});
      })
      .catch(e => console.log(e));
    },
    updateClient() {
      ClientDataService.update(this.currentClient.id, this.currentClient)
      .then(res => {
        console.log(res.data);
        this.message = "El cliente fue actualizado";
      })
      .catch(e => console.log(e));
    }
  },
  mounted() {
    this.message = "";
    this.getClient(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>