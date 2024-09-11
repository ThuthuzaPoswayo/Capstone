<template>
    <div class="container-fluid footer">
      <div class="row justify-content-center">
        <p class="lead">
          ThutzBeauty &copy; <span id="currYear"></span>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .footer {
    background: linear-gradient(to right, #fce4ec, #f8bbd0, #f48fb1); /* Light pink gradient */
    padding: 20px;
  }
  
  .lead {
    font-family: "Abril Fatface", serif;
    font-weight: bolder;
    color: #333;
    text-align: center;
    margin: 0;
  }
  </style>
  