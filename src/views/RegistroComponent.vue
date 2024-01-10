<template>
    <div>
      <h2>Registro</h2>
      <router-link to="/">Ingresar</router-link>
      <!-- Formulario de registro -->
      <form @submit.prevent="registro">
        <label>Usuario:</label>
        <input v-model="username" type="text" required>
        
        <label>Contraseña:</label>
        <input v-model="password" type="password" required>
  
        <label>Email:</label>
        <input v-model="email" type="email" required>
  
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: '',
        email: ''
      };
    },
    methods: {
      registro() {
        //  realizar la solicitud de registro usando Axios
        axios.post('http://localhost:3000/registro', {
          username: this.username,
          password: this.password,
          email: this.email
        })
        .then(response => {
          //  respuesta del servidor después del registro
          console.log(response.data);
        })
        .catch(error => {
          //  errores
          console.error(error);
        });
      }
    }
  };
  </script>
  