  <template>
    <div class="max-w-md mx-auto mt-10">
      <div class="bg-white shadow-md rounded-md p-6">
        <form @submit.prevent="tokenizar" class="space-y-5">
          <label class="block text-gray-700">Nombre del titular</label>
          <input v-model="username" type="text" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
  
          <label class="block text-gray-700">Número de tarjeta</label>
          <input v-model="cardNumber" type="text" maxlength="16" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
  
          <div class="flex space-x-2">
            <div class="w-1/2">
              <label class="block text-gray-700">(MM/YYYY)</label>
              <input v-model="expirationDate" type="text" maxlength="7" @input="formatExpirationDate" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            </div>
            <div class="w-1/2">
              <label class="block text-gray-700">CVV</label>
              <input v-model="cvv" type="number" oninput="this.value = this.value.slice(0, 3)" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
            </div>
          </div>
  
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" required class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
  
          <button type="submit" class="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Tokenizar Tarjeta</button>
        </form>
      </div>
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
        //const storedTokenLocals = localStorage.getItem('token_locals');


        // realizar la solicitud de tokenización usando Axios
        this.$axios.post('http://localhost:3000/tokenizar', {
          username : this.username,
          cardNumber: this.cardNumber,
          expirationMonth : month,
          expirationYear : year,
          cvv: this.cvv,
          email: this.email,
          token_locals: localStorage.getItem('token_locals'),
        // },{
        //   headers: {
            
        //     'Authorization': 'Bearer' + localStorage.getItem('token'),
        //   },
        })
        .then(response => {
          alert(`Tarjeta tokenizada exitosamente. Token: ${response.data.token}`);
          console.log('Token almacenado en LocalStorage:', localStorage.getItem('token_locals'));
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