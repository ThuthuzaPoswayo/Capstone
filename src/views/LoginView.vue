


<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email/UserName:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button> <router-link :to="`/signup/`" class="link-no-decoration">Sign Up</router-link></button></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
     
        console.log('Logging in with:', this.email, this.password);

      },
      goToSignup() {
      
        this.$router.push({ name: 'Signup' });
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  form {
    display: flex;
    flex-direction: column;
  }
  form > div {
    margin-bottom: 15px;
  }
  button {
    padding: 10px;
    background-color: #89bdf9;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  