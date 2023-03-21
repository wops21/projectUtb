<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-icon v-on="on">mdi-bell</v-icon>
    </template>
    <v-list>
      <v-subheader>Notifications</v-subheader>
      <v-alert v-for="(notification, index) in notifications" :key="index" :value="true" dismissible>
        {{ notification.message }} - {{ notification.date }}
      </v-alert>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        { message: "New message received", date: "2022-03-07" },
        { message: "You have a new follower", date: "2022-03-06" },
        { message: "Someone commented on your post", date: "2022-03-05" }
      ]
    }
  }
}
</script>
