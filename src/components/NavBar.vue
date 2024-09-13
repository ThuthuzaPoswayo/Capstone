<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img id="logo"
          src="https://thuthuzaposwayo.github.io/All-images/Capstone/thutz.png"
          alt="logo"
          class="img-fluid"
          loading="lazy"
        />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact active-class="router-link-active"><i class="bi bi-house-door-fill"></i>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/reserve">Reserve</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reach-us">Reach Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


.navbar {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-style: normal;
    padding: 0;
    background: linear-gradient(to right, #fa98b7, #ffbee4, #ff84c8);
    color: #f0d0e3;
}

.navbar-brand {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

#logo {
    width: 10rem;
    height: 100%;
    max-height: 100px;
    object-fit: contain; 
}

#navbarSupportedContent {
    font-family: "Montserrat", sans-serif;
}

.nav-link {
    color: #333; /* Default link color */
}

.nav-link:hover {
    color: #8b4513; /* Brown hover effect */
}


</style>


