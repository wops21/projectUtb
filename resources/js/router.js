import Vue from "vue";
import Router from "vue-router";
import SideBar from "./components/SideBar.vue";
import Login from "./views/autetificacion/Login.vue";
import Perfil from "./views/config/Perfil.vue";
import Recuperar from "./views/autetificacion/Recuperar.vue";
import Error from "./views/autetificacion/Error.vue";
import RecuperarContraseña from "./views/autetificacion/RecuperarContraseña.vue";
import SideBarClient from "./components/SideBarClient.vue";
import QrIndex from "./views/qrGenerator/QrIndex.vue"
import * as auth from "./services/auth_service";
import * as eventService from './services/evento_service';
Vue.use(Router);
const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/recuperar",
        name: "recuperar",
        component: Recuperar,
    },
    {
        path: "/recuperar-contraseña/:email",
        name: "recuperarContraseña",
        component: RecuperarContraseña,
    },
    {
        path: "/sidebar-admin",
        name: "sideBar",
        component: SideBar,
        children: [
            {
                path: "/",
                name: "dashboards",
                component: () => import("./views/Dashboard.vue"),
            },
            {
                path: "/estudiantes",
                name: "estudiantes",
                component: () =>
                    import("./views/administracion/EstudianteIndex.vue"),
            },
            {
                path: "/estudiantesInactivos",
                name: "estudiantesInactivos",
                component: () =>
                    import("./views/administracion/EstudianteInactivo.vue"),
            },

            {
                path: "/docentes",
                name: "docentes",
                component: () =>
                    import("./views/administracion/DocenteIndex.vue"),
            },
            {
                path: "/docentesInactivos",
                name: "docentesInactivos",
                component: () =>
                    import("./views/administracion/DocenteInactivo.vue"),
            },
            {
                path: "/solicitudes",
                name: "solicitudes",
                component: () =>
                    import("./views/solicitudes/SolicitudIndex.vue"),
            },
            {
                path: "/solicitudesAprobadas",
                name: "solicitudesAprobadas",
                component: () =>
                    import("./views/solicitudes/SolicitudAprobada.vue"),
            },
            {
                path: "/asignaciones",
                name: "asignaciones",
                component: () =>
                    import("./views/asignaciones/AsignacionIndex.vue"),
            },
            {
                path: "/asignacionesAprobadas",
                name: "asignacionesAprobadas",
                component: () =>
                    import("./views/asignaciones/AsignacionAprobada.vue"),
            },
            {
                path: "/defensa/",
                component: () => import("./views/defensas/Defensa.vue"),
                props: true,
                children: [
                    {
                        path: "",
                        name: "panel1",
                        component: () =>
                            import("./views/defensas/panel1/Panel1.vue"),
                    },
                    {
                        path: "panel2",
                        name: "panel2",
                        component: () =>
                            import("./views/defensas/panel2/Panel2.vue"),
                    },
                    {
                        path: "panel3",
                        name: "panel3",
                        component: () =>
                            import("./views/defensas/panel3/Panel3.vue"),
                    },
                ],
                beforeEnter(to, from, next) {
                    if (!auth.isLoggedIn()) {
                        next();
                    } else {
                        next();
                    }
                },
            },
            {
                path: "/config",
                name: "config",
                component: () => import("./views/config/config.vue"),
            },
            {
                path: "/perfil",
                name: "perfil",
                component: Perfil,
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next("/");
            } else if (auth.getUserRole() === "administratorMain") {
                next();
            } 
        },
    },
    {
        path: "/sidebar-client",
        name: "sideBarClient",
        component: SideBarClient,
        children: [
            {
                path: "/client-n",
                name: "clientNormalInicio",
                component: () =>
                    import("./views/evento/usuario/ClientNormalInicio.vue"),
                    beforeEnter(to, from, next) {
                        if (
                              auth.getUserRole() == "user" || auth.getUserRole() == "administratorSem" 
                             
                          ) {
                              next();
                          } else {
                              if(auth.getUserRole() == 'administratorMainSem'){
                                  next("/admin-e");
                              }
                          }
                      },
            },
            
            {
                path: "/admin-s",
                name: "AdminSemInicio",
                component: () =>
                    import("./views/evento/usuario/administradorSem/ClientInicio.vue"),
                    beforeEnter(to, from, next) {
                      if (
                            auth.getUserRole() == "administratorSem" 
                           
                        ) {
                            next();
                        } else {
                            if(auth.getUserRole() == 'administratorMainSem'){
                                next("/admin-e");
                            }else if( auth.getUserRole() == 'user'){
                                next("/client-n");
                            }
                        }
                    },
           
            },
            {
                path: "/admin-e",
                name: "adminEventInicio",
                component: () =>
                    import("./views/evento/usuario/administradorEvento/AdministradorEventoInicio.vue"),
                    beforeEnter(to, from, next) {
                        if (
                              auth.getUserRole() == "administratorMainSem" 
                             
                          ) {
                              next();
                          } else {
                              if(auth.getUserRole() == 'administratorSem'){
                                  next("/admin-s");
                              }else if( auth.getUserRole() == 'user'){
                                  next("/client-n");
                              }
                          }
                      },
            },
            {
                path: "/clientAsignacion",
                name: "ClientAsignacion",
                component: () =>
                    import(
                        "./views/evento/usuario/administradorSem/ClientAsignacion.vue"
                    ),
                    beforeEnter(to, from, next) {
                        if (
                              auth.getUserRole() == "administratorSem" 
                             
                          ) {
                              next();
                          } else {
                              if(auth.getUserRole() == 'administratorMainSem'){
                                  next("/admin-e");
                              }else if( auth.getUserRole() == 'user'){
                                  next("/client-n");
                              }
                          }
                      },
            },
            {
                path: "/clientReporte",
                name: "ClientReporte",
                component: () =>
                    import(
                        "./views/evento/usuario/administradorSem/ClientReporte.vue"
                    ),
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next("/");
            } else if (
                auth.getUserRole() == "administratorSem" ||
                auth.getUserRole() == "user" ||
                auth.getUserRole() == "administratorMainSem"
            ) {
                next();
            } else {
                next("/sidebar-admin");
            }
        },
    },
    {
        path: '/busqueda-qr/:ci/:idE/:idA',
        name: 'getQr',
        component: QrIndex,
        //props: true,
   
    },
    {
        path: "*",
        name: "error",
        component: Error,
    },
];

const router = new Router({
    mode: "history",
    routes: routes,
    linkActiveClass: "active",
});

export default router;
