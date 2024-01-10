<template>
  <div class="card-form">
     <h2 class="text-2xl font-bold mb-5">Registro</h2>
     <router-link to="/" class="block mb-4">Ingresar</router-link>
     <form @submit.prevent="registro" class="space-y-5">
       <label class="block">Usuario</label>
       <input v-model="username" type="text" required class="w-full p-2 border border-gray-300 rounded">
 
       <label class="block">Contraseña</label>
       <input v-model="password" type="password" required class="w-full p-2 border border-gray-300 rounded">
 
       <label class="block">Email</label>
       <input v-model="email" type="email" required class="w-full p-2 border border-gray-300 rounded">
 
       <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded">Registrarse</button>
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
  