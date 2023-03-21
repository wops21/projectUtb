import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "material-design-icons-iconfont";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";
import VueHtml2pdf from "vue-html2pdf";
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import es from 'vuetify/es5/locale/es';

require('moment/locale/es');

moment.locale('es');

Vue.use(VueMoment, {moment})
Vue.filter('formatDate', function(value){
    if(value){
        return moment(String(value)).format('DD/MM/YYYY')
    }
});

Vue.config.productionTip = false;

window.Swal = Swal;

Vue.use(Vuetify);
Vue.use(VueSweetalert2);
Vue.use(VueHtml2pdf);

new Vue({
    el: "#app",
    vuetify: new Vuetify({
        icons: {
            iconfont: 'md'
          },
          lang: {
            locales: { es },
            current: 'es'
          }
    }),
    router,
    store,
    render: (h) => h(App),
});
