<template>
  <div>
    <h2>Login</h2>
    <router-link to="/registro">Registrar</router-link>
    <form @submit.prevent="login">
      <label>Usuario:</label>
      <input v-model="username" type="text" required>
      
      <label>Contraseña:</label>
      <input v-model="password" type="password" required>
      
      <button type="submit">Iniciar Sesión</button>

    </form>
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
        console.log(response.data);

        localStorage.setItem('token', response.data.token);
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
