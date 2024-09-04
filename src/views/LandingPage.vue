<template>
    <div class="welcome-page">
      <h1>Welcome to the Reservation System</h1>
      <button @click="navigateToLogin">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Welcome',
    methods: {
      navigateToLogin() {
        this.$router.push({ name: 'Login' });
      },
    },
  };
  </script>
  
  <style scoped>
  .welcome-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }
  </style>
  