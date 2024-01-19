<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-900">
      <h2 class="text-2xl font-semibold mb-4">DATOS DE LA TARJETA</h2>
      
      <form @submit.prevent="verDatos" class="pb-4">
        <label for="table-search" class="sr-only">Token de la Tarjeta:</label>
        <div class="relative mt-1">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="token" type="text" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese Token de Tarjeta..." required>
        </div>
  
        <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Ver Datos</button>
      </form>
  
      <div v-if="datosTarjeta" class="mt-6">
      <h3 class="text-xl font-semibold mb-2">Datos de la Tarjeta:</h3>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Identificador Cliente</th>
            <th scope="col" class="px-6 py-3">Número de Tarjeta</th>
            <th scope="col" class="px-6 py-3">Correo Electronico</th>
            <th scope="col" class="px-6 py-3">Mes de Expiración</th>
            <th scope="col" class="px-6 py-3">Año de Expiración</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ datosTarjeta.usuario }}
            </td>
            <td class="px-6 py-4">
              {{ datosTarjeta.tarjeta }}
            </td>
            <td class="px-6 py-4">
              {{ datosTarjeta.mail }}
            </td>
            <td class="px-6 py-4">
              {{ datosTarjeta.mesexp }}
            </td>
            <td class="px-6 py-4">
              {{ datosTarjeta.anioexp }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </template>

  
  <script>
  export default {
    data() {
      return {
        token: '',
        datosTarjeta: null,
      };
    },
    methods: {
      verDatos() {
        // Lógica para realizar la solicitud de ver datos usando Axios
        this.$axios.get('http://localhost:3000/informacion/'+this.token
       
        )
        .then(response => {
          // Manejar la respuesta del servidor después de ver datos
          this.datosTarjeta = response.data;
          console.log(response.data);
        })
        .catch(error => {
          // Manejar errores
          console.error(alert("Token vencido , vuela a tokenizar",error));
        });
      }
    }
  };
  </script>
  