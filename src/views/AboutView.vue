<template>
  <div class="about-page">
    <div class="row">
      <h2 class="display-2" id="heading">
        About
      </h2>

      <div class="container">
       
        <div class="row align-items-start equal-height-columns">
        
          <div class="col-md-6 text-center mb-4" id="image">
            <img src="https://thuthuzaposwayo.github.io/All-images/eShop/ytee.png" class="rounded-img img-fluid slide-in">
          </div>

        
          <div class="col-md-6 blog-style-column" id="text">
            <p>
              ThutzBeauty was founded in the year 2020 by Thuthuza Poswayo, a self-taught Nail Technician and trained Lash Technician.
            </p>
            <p>
              It is my love for beauty that encouraged me to become an entrepreneur in this rapidly growing industry. I strive to serve my customers
              with lots of dazzle and love. My aim is to make beauty products accessible to all; the needs of my clients come first. I strive for growth and excellence!
            </p>
            <p>
              "It takes drive and courage to be able to put yourself out there with a skill that you received no formal training for. I am so glad that
              I did because it opened a world that I never knew would bring me so much happiness and growth. Not a single day feels like I am at work." 
              - Thuthuza Poswayo
            </p>
          </div>
        </div>


        <div class="row equal-height-columns">
          <div class="col-md-6 text-center mb-4">
            <div class="image-container">
              <img id="woman" src="http://thuthuzaposwayo.github.io/All-images/images/womanowned.png" class="rounded-img img-fluid"> 
              <p>Thutzbeauty is proudly woman-owned</p>
            </div>
          </div>

          <div class="col-md-6 text-center mb-4">
            <div class="image-container">
              <img id="vegan" src="http://thuthuzaposwayo.github.io/All-images/images/veganfree.png" class="rounded-img img-fluid">
              <p>All of our products are vegan-friendly and free of animal cruelty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');


.about-page {
  background: linear-gradient(to bottom, #fdecef, #fce4ec); 
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
}


.image-container {
  text-align: center;
  margin: 1rem auto;
}


.rounded-img {
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(255, 109, 133, 0.8); 
  transition: box-shadow 0.3s ease-in-out, transform 0.6s;
  max-width: 70%; 
  margin: auto;
}


.slide-in {
  animation: slideIn 1s ease-out forwards;
  opacity: 0; 
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}


.flip-animation {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-animation:hover {
  transform: rotateY(360deg);
}


.blog-style-column {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Montserrat', sans-serif;
  color: #333;
  text-align: justify;
}


.blog-style-column p {
  margin-bottom: 1rem; 
}


.equal-height-columns {
  display: flex;
  flex-wrap: wrap;
}


#heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-align: center;
  color: rgb(255, 109, 133);
  margin-bottom: 2rem;
}


.row {
  display: flex;
}

.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
