<template>
    <div>
      <h2>Tokenizar</h2>
      <form @submit.prevent="tokenizar">
        <label>Propietario</label>
        <input v-model="username" type="text" required>

        <label>Número de Tarjeta:</label>
        <input v-model="cardNumber" type="text" required>
        
        <label>Fecha de Expiración (MM/YYYY):</label>
        <input v-model="expirationDate" type="text" required>
        
        <label>CVV:</label>
        <input v-model="cvv" type="number" required>
  
        <label>Email:</label>
        <input v-model="email" type="email" required>
  
        <button type="submit">Tokenizar Tarjeta</button>
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
          //  errores
          console.error(error);
        });
      }
    }
  };
  </script>
  