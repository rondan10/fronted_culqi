
<template>
  <div class="bg-gray-200 shadow-lg rounded-lg">
      <form @submit.prevent="tokenizar" class="space-y-5 p-5">
        <label class="block">Nombre del titular</label>
        <input v-model="username" type="text" required class="w-full p-2 border border-gray-300 rounded">
  
        <label class="block">Número de tarjeta</label>
        <input v-model="cardNumber" type="text" maxlength="16" required class="w-full p-2 border border-gray-300 rounded">
  
        <label class="block">Fecha de Expiración (MM/YYYY)</label>
        <input v-model="expirationDate" type="text" maxlength="7" @input="formatExpirationDate" required class="w-full p-2 border border-gray-300 rounded">
  
        <label class="block">CVV</label>
        <input v-model="cvv" type="number" oninput="this.value = this.value.slice(0, 3)" required class="w-full p-2 border border-gray-300 rounded">
  
        <label class="block">Email</label>
        <input v-model="email" type="email" required class="w-full p-2 border border-gray-300 rounded">
  
        <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded">Tokenizar Tarjeta</button>
      </form>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        email: ''
      };
    },
    methods: {

      formatExpirationDate(event) {
      let inputValue = event.target.value;

      if (inputValue.length === 2 && !inputValue.includes('/')) {
        inputValue += '/';
      }

      this.expirationDate = inputValue;
    },
      tokenizar() {

        const [month , year] = this.expirationDate.split('/');

        // realizar la solicitud de tokenización usando Axios
        this.$axios.post('http://localhost:3000/tokenizar', {
          username : this.username,
          cardNumber: this.cardNumber,
          expirationMonth : month,
          expirationYear : year,
          cvv: this.cvv,
          email: this.email,
        },{
          headers: {
            
            'Authorization': 'Bearer' + localStorage.getItem('token'),
          },
        })
        .then(response => {
          //  respuesta del servidor después de la tokenización
          console.log('Token almacenado en LocalStorage:', localStorage.getItem('token'));
          console.log(response.data);

          this.username = '';
          this.cardNumber = '';
          this.expirationDate = '';
          this.cvv = '';
          this.email = '';
        })
        .catch(error => {
          alert("Ingrese una tarjeta válida");
          this.cardNumber = '';
          //  errores
          console.error(error);
        });
      }
    }
  };
  </script>
  
<style>
@import '~tailwindcss/base';
@import '~tailwindcss/components';
@import '~tailwindcss/utilities';
</style>