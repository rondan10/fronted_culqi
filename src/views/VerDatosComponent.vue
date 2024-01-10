
<template>
    <div>
      <h2>Ver Datos de Tarjeta</h2>
      <form @submit.prevent="verDatos">
        <label>Token de la Tarjeta:</label>
        <input v-model="token" type="text" required>
        
        <button type="submit">Ver Datos</button>
      </form>
      <h2>Token de la tarjeta es : {{ token }}</h2>
    </div>

    <div v-if="datosTarjeta">
      <h3>Datos de la Tarjeta:</h3>
      <p>Usuario: {{ datosTarjeta.usuario }}</p>
      <p>Correo Electrónico: {{ datosTarjeta.mail }}</p>
      <p>Número de Tarjeta: {{ datosTarjeta.tarjeta }}</p>
      <p>CVV: {{ datosTarjeta.cvv }}</p>
      <p>Año de Expiración: {{ datosTarjeta.anioExpiracion }}</p>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        token: '',
        datosTarjeta: null
      };
    },
    methods: {
      verDatos() {
        //  realizar la solicitud de ver datos usando Axios
        this.$axios.get('http://localhost:3000/informacion/'+this.token
       
        )
        .then(response => {
          // respuesta del servidor después de ver datos
          console.log(response.data);
          this.datosTarjeta = response.data;

        })
        .catch(error => {
          //  errores
          console.error(error);
        });
      }
    }
  };
  </script>
  