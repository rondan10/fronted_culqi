<template>
  <div class="bg-black-1 min-h-screen flex items-center justify-center">
     <div class="bg-white rounded-lg shadow-xl p-8">
       <h2 class="text-3xl font-bold mb-8">Registro</h2>
       <router-link to="/" class="block mb-4">Ingresar</router-link>
       <form @submit.prevent="registro" class="space-y-6">
         <label class="block text-lg">Usuario</label>
         <input v-model="username" type="text" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
 
         <label class="block text-lg">Contraseña</label>
         <input v-model="password" type="password" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
 
         <label class="block text-lg">Email</label>
         <input v-model="email" type="email" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
 
         <button type="submit" class="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md">Registrarse</button>
       </form>
     </div>
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
          alert("Usuario Registrado Correctamente");
          //  respuesta del servidor después del registro
          console.log(response.data);
          this.username = '';
          this.password = '';
          this.email = '';
        })
        .catch(error => {
          //  errores
          console.error(error);
        });
      }
    }
  };
  </script>

<style scoped>
@import '~tailwindcss/base';
@import '~tailwindcss/components';
@import '~tailwindcss/utilities';
</style>

