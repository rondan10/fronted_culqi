import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginComponent.vue';
import Tokenizar from '../views/TokenizarComponent.vue';
import VerDatos from '../views/VerDatosComponent.vue';
import Registro from '../views/RegistroComponent.vue';
import Perfil from '../views/VistaUsuario.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/tokenizar',
      name: 'tokenizar',
      component: Tokenizar,
    },
    {
      path: '/ver-datos',
      name: 'ver-datos',
      component: VerDatos,
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro,
    },
    {
      path:'/perfil_:username' ,
      name: 'perfil',
      component : Perfil ,
    },
  ],
});

export default router;
