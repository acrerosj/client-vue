<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Lista de Clientes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(client, index) in clients"
          :key="index"
          @click="setActiveTutorial(client, index)"
        >
          {{ client.nombre }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentClient">
        <h4>Cliente</h4>
        <div>
          <label for="">
            {{ currentClient.nombre }}
          </label>
        </div>
        <div>
          <label for="">
            {{ currentClient.apellidos }}
          </label>
        </div>
        <router-link
          :to="'/clientes/' + currentClient.id"
          class="badge badge-warning text-primary"
          >Editar</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Selecciona un cliente...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ClientDataService from "../services/ClientDataService";

export default {
  name: "clients-list",
  data() {
    return {
      clients: [],
      currentClient: null,
      currentIndex: -1,
    };
  },
  methods: {
    retrieveClients() {
      ClientDataService.getAll()
        .then((res) => {
          console.log(res.data.data.clientes);
          this.clients = res.data.data.clientes;
        })
        .catch((e) => console.log(e));
    },
    setActiveTutorial(client, index) {
      this.currentClient = client;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveClients();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>