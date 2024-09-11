<template>
  <body>
  <div class="container">
    <div class="column">
      <img src="https://thuthuzaposwayo.github.io/All-images/Capstone/home.png" alt="Home Image" class="round-image">
    </div>
    <div class="column">
      <h2>Welcome to ThutzBeauty, your #1 beauty plug!</h2>
    </div>
  </div>
</body>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
  margin: 0; 
  background: linear-gradient(to right, #fbc2eb, #a6c1ee, #f1e6b2); 
  font-family: "DM Serif Display", serif; 
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
}

.column {
  flex: 1;
  text-align: center;
}

.round-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: 5px solid transparent;
  box-shadow: 0 0 15px 5px rgba(255, 105, 180, 0.75); 
  object-fit: cover;
}

h2 {
  font-size: 4rem;
  color: #171616;
  margin: 20px;
  font-weight: bolder;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 1rem; 
  }
  .column {
    margin-bottom: 2rem;
  }
  .round-image {
    width: 250px;
    height: 250px;
  }
  h2 {
    font-size: 2.5rem; 
  }
}
</style>