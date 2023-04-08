<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as auth from './services/auth_service';
    export default {
        name: 'App',
        beforeCreate: async function() {
        
            try {
                if (auth.isLoggedIn()) {
                    const response = await auth.getProfile();
                    this.$store.dispatch('GET_AUTHENTICATE', response.data);
                }
            } catch (error) {
              
                console.log(error)
            }
           
   
        }
    }
</script>
