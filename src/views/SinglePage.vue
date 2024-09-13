<template>
  <div>
    <h1 class="service-heading">Service Details</h1>
    <Loader v-if="loading" />
    <div class="container" v-else>
      <Card id="servicesview" v-if="service">
        <template v-slot:cardHeader>
          <section>
            <div class="prod">
              <div class="card">
                <img
                  :src="service.images_url"
                  class="card-img-top"
                  alt="Service Image"
                />
                <div class="card-body">
                  <h2 class="card-title">{{ service.service_name }}</h2>
                  <p class="card-text">Price: R {{ service.price }}</p>
                  <p class="card-text">
                    Duration: {{ service.duration }} minutes
                  </p>
                  <p class="card-text">{{ service.description }}</p>
                  <button @click="bookService">
                    Book {{ service.service_name }}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/CardComp.vue";
import Loader from "../components/Loader.vue";

export default {
  components: {
    Card,
    Loader,
  },
  data() {
    return {
      service: null,
      loading: true,
    };
  },
  methods: {
    async getService() {
      const serviceId = this.$route.params.id; 
      try {
      
        const service = await this.$store.dispatch("getService", serviceId);
        this.service = service; 
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    },
    bookService() {
      console.log("Booking service:", this.service.service_name);
    },
  },

  mounted() {
    this.getService();
    this.loading = false;
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');



.service-heading {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: #ff69b4;
  text-align: center;
  margin-bottom: 20px;
}

.card {
  width: 300px;
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
