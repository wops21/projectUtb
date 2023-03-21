<template>
  <v-container>
    <tbody>
      <tr v-for="(item, index) in lista" :key="index">
        <td>{{ item.nombre }}</td>
        <td>
          <v-btn v-bind:color="item.nombre == 'juan' ? 'red' : 'blue'"
            ><v-icon>delete</v-icon></v-btn
          >
        </td>
        <td>
          <v-icon
            v-bind:class="item.nombre == 'juan' ? 'delete' : 'edit'"
            v-bind:color="item.nombre == 'juan' ? 'red' : 'blue'"
          ></v-icon>
        </td>
      </tr>
    </tbody>
    <v-btn v-bind:color="items.ab == 'hola' ? 'red' : 'blue'">
      <v-icon>delete</v-icon></v-btn
    >

    <h1 v-if="items.link.ac == 'holas'">Soy mayosr</h1>
    <h1 v-else="items.link.ac == 'hola'">Soy No soy nadas</h1>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      a: 5,
      items: {
        ab: "hola",
        link: {
          ac: "hola",
        },
      },
      lista: [
        {
          nombre: "juan",
        },
        {
          nombre: "Roberto",
        },
        { nombre: "cristian" },
        {
          nombre: "jose",
        },
      ],
    };
  },
};
</script>