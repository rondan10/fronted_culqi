<template>
    <div>
      <h2>Bienvenido, {{ username }}!</h2>
  
      <!-- Componente Tokenizar -->
      <h3>Tokenizar Tarjeta</h3>
      <Tokenizar @tokenizado="manejarTokenizado" />
  
      <!-- Componente VerDatos -->
      <h3>Ver Datos de Tarjeta</h3>
      <VerDatos @datosTarjeta="manejarDatosTarjeta" />
    </div>
  </template>
  
  <script>
  import Tokenizar from './TokenizarComponent.vue';
  import VerDatos from './VerDatosComponent.vue';
  
  export default {
   
    components: {
      Tokenizar,
      VerDatos
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
        localStorage.setItem('token', token);
      },
      manejarDatosTarjeta(datos) {
        //  datos de la tarjeta recibidos
        console.log('Datos de tarjeta recibidos:', datos);
      }
    },
  };
  
  </script>
  