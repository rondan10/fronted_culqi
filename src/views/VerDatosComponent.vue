
<template>
    <div>
      <h2>Ver Datos de Tarjeta</h2>
      <!-- Formulario para ver datos de tarjeta usando un token -->
      <form @submit.prevent="verDatos">
        <label>Token de la Tarjeta:</label>
        <input v-model="token" type="text" required>
        
        <button type="submit">Ver Datos</button>
      </form>
      <h2>Token de la tarjeta es : {{ token }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        token: ''
      };
    },
    methods: {
      verDatos() {
        // Lógica para realizar la solicitud de ver datos usando Axios
        this.$axios.get('http://localhost:3000/informacion/'+this.token
       
        )
        .then(response => {
          // Manejar la respuesta del servidor después de ver datos
          console.log(response.data);
        })
        .catch(error => {
          // Manejar errores
          console.error(error);
        });
      }
    }
  };
  </script>
  