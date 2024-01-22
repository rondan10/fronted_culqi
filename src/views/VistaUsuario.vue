<template>
    <div>
      <h2>Bienvenido, {{ username }}!</h2>
  
      <!-- Componente Tokenizar -->
      <Tokenizar @tokenizado="manejarTokenizado" />
  
      <!-- Componente VerDatos -->
      <VerDatos @datosTarjeta="manejarDatosTarjeta" />

      <button @click="cerrarSesion">Cerrar Sesion</button>
    </div>
  </template>
  
  <script>
  import Tokenizar from './TokenizarComponent.vue';
  import VerDatos from './VerDatosComponent.vue';
  export default {
   
    components: {
      Tokenizar,
      VerDatos,
    },
    data() {
    return {
      username: null 
    };
  },
  created() {
    this.username = this.$route.params.username; 
  },
    methods: {
      manejarTokenizado(token) {
        //  token recibido después de la tokenización
        console.log('Token recibido:', token);
        //localStorage.setItem('token', token);
      },
      manejarDatosTarjeta(datos) {
        //  datos de la tarjeta recibidos
        console.log('Datos de tarjeta recibidos:', datos);
      },
      cerrarSesion(token_locals){
      localStorage.removeItem('token_locals');
      console.log('Datos eliminados:', token_locals);
      this.$router.push('/');
      this.$router.replace('/');
      window.history.replaceState(null, '','/');
    }
    },
  };
  
  </script>
  