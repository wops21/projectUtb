<template>
  <div class="text-center">
    <h1 class="display-1">404</h1>
    <p class="headline mb-3">Lo siento, la página que estás buscando no existe.</p>
    <v-btn color="primary" to="/">Volver al inicio</v-btn>
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>
<style>
.v-application {
  height: 100%;
}

.v-content {
  flex-grow: 1;
}

.text-center {
  text-align: center;
}

.headline {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

.display-1 {
  font-size: 12rem;
  margin-top: 0;
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .display-1 {
    font-size: 5rem;
  }

  .headline {
    font-size: 1.5rem;
  }
}
</style>
