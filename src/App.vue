<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">DAW</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/clientes" class="nav-link">Clientes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/clientes/add" class="nav-link">Nuevo Cliente</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>