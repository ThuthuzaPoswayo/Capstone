<template>
    <div>
      <h1 class="service-heading">Service Details</h1>
      
      <Card v-if="service" id="service-view">
        <section>
          <div class="card">
            <img :src="service.images_url" class="card-img-top" alt="Service Image" />
            <div class="card-body">
              <h2 class="card-title">{{ service.service_name }}</h2>
              <p class="card-text">Price: R{{ service.price }}</p>
              <p class="card-text">Duration: {{ service.duration }} minutes</p>
              <p class="card-text">{{ service.description }}</p>
              <button @click="bookService">Book {{ service.service_name }}</button>
            </div>
          </div>
        </section>
      </Card>
    </div>
  </template>
  

  <script>
  import Card from '../components/CardComp.vue';
  
  export default {
    components: {
      Card,
    },
    data() {
      return {
        service: null,
      };
    },
    methods: {
      async getService() {
        const serviceId = this.$route.params.id;
        try {
          const { data } = await this.$store.dispatch('getService', serviceId);
          this.service = this.$store.state.services.find(service => service.service_id === Number(serviceId));
        } catch (error) {
          console.error("Error fetching service:", error);
        }
      },
      bookService() {
        // Implement booking logic
        console.log("Booking service:", this.service.service_name);
      }
    },
    mounted() {
      this.getService();
    }
  }
  </script>
  

  <style scoped>
  .service-heading {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #ff69b4;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .card {
    width: 400px;
    margin: 0 auto;
    border-radius: 15px;
    background: linear-gradient(135deg, #ffe0f0, #f8bbd0);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-body {
    text-align: center;
  }
  
  button {
    background-color: #ff69b4;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  </style>
  