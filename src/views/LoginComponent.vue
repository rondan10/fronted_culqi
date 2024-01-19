<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
           <img class="mx-auto" src="../assets/black.png"/>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Iniciar sesión
          </h2>
          <router-link to="/registro" class="block mb-4 text-center">Registrarse</router-link>
        </div>
        <form @submit.prevent="login" class="mt-8 space-y-6">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Usuario</label>
              <input id="username" v-model="username" type="text" autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Usuario">
            </div>
            <div>
              <label for="password" class="sr-only">Contraseña</label>
              <input id="password" v-model="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña">
            </div>
          </div>
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
  </div>
  </template>

<script>

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // realizar la solicitud de inicio de sesión usando Axios
      this.$axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        //  respuesta del servidor después del inicio de sesión
        alert("Inicio de Sesion Existoso");
        console.log(response.data);

        localStorage.setItem('token_locals', response.data.token_locals);
        this.$router.push({ name: 'perfil', params: { username: this.username } });

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
