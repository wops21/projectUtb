<template>
  <div>
    <v-tabs
    background-color="#463F3A"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      height="60px"
      v-model="activeTab"
    >
    <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
     {{ tab.name }}
       </v-tab
      >
    </v-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      activeTab: "/defensa",
      tabs: [
        { id: 1, name: "Panel 1", route: `/defensa` },
        { id: 2, name: "Panel 2", route: `/defensa/Panel2` },
         { id: 3, name: "Panel 3", route: `/defensa/Panel3` },
      ],
    };
  },
};
</script>
