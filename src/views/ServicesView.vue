<!-- <template>
    <h1 class="services-heading"> Our Services </h1>
    
    <Card id="servicesview">
        <template v-slot:cardHeader>
            <section>
                <div class="prod" v-for="service in $store.state.services" :key="service.service_id">
                    <div class="row row-cols-1 row-cols-md-2 g-4 card-proj">
                        <div class="col">
                            <div class="card">
                                <img :src="service.imageUrl" class="card-img-top" alt="Service Image">
                                <div class="card-body">
                                    <h2 class="card-title"> {{ service.service_name }} </h2>
                                    <p class="card-text"> R{{ service.price }} </p>
                                    <p class="card-text"> Duration: {{ service.duration }} minutes </p>
                                    <p class="card-text"> {{ service.description }} </p>
  
                                    <button> 
                                      <router-link :to="{name:'single-service', params:{id:service.service_id}}" class="link-no-decoration"> 
                                        View {{ service.service_name }} 
                                      </router-link>
                                    </button>
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </Card> 
  
</template> -->

<template>
    <h1 class="services-heading">Our Services</h1>

    <div class="controls">
    <button @click="sortServicesByPrice">Sort</button>
    <button @click="filterByPriceRange(100, 500)">Filter</button>
  </div>
    
    <Card id="servicesview">
      <template v-slot:cardHeader>
        <section v-if="services && services.length">
          <div 
            class="prod" 
            v-for="service in services" 
            :key="service.service_id"
          >
            <div class="row row-cols-1 row-cols-md-2 g-4 card-proj">
              <div class="col">
                <div class="card">
                  <img 
                    :src="service.images_url" 
                    class="card-img-top" 
                    alt="Service Image"
                  />
                  <div class="card-body">
                    <h2 class="card-title">{{ service.service_name }}</h2>
                    <p class="card-text">R{{ service.price }}</p>
                    <!-- <p class="card-text">Duration: {{ service.duration }} minutes</p>
                    <p class="card-text">{{ service.description }}</p> -->
  
                    <button>
                        <router-link :to="`/singleproducts/${service.service_id}`" class="link-no-decoration">View</router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </Card>
  </template>
  

<!-- <script>
import CardComp from '../components/CardComp.vue';
export default {
    components: {
        CardComp
    },
    methods: {
        getServices() {
            this.$store.dispatch('getServices')
        }
    },
    mounted() {
        this.getServices()
    }
}
</script> -->
<script>
import Card from '../components/CardComp.vue';

import Footer from '../components/Footer.vue' ;

export default {
  components: {
    Card,
    Footer
  },

  data() {
    return {
      priceFilterRange: null, 
      sortAscending: true,
    };
},

  computed: {
    services() {
      return this.$store.state.services;
    }




  },
  methods: {
    getServices() {
      this.$store.dispatch('getServices')
    }
  },

 
    // Method to sort services by price
    sortServicesByPrice() {
      this.sortAscending = !this.sortAscending; // Toggle sort order
      this.$store.commit('setSortedServices', this.sortAscending); // Commit the sorted state
    },
    
    // Method to filter services within a price range
    filterByPriceRange(minPrice, maxPrice) {
      this.priceFilterRange = [minPrice, maxPrice];
    },




  mounted() {
    this.getServices()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

.services-heading {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #ff69b4;
    text-align: center;
    margin-bottom: 20px;
}

.card {
    width: 200px;
    border-radius: 15px;
    background: linear-gradient(135deg, #ffe0f0, #f8bbd0); 
    padding: 20px;
    font-family: "Montserrat", sans-serif; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.price {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
}

section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    margin-top: 40px;
}

.card {
    height: 500px;
    width: 250px;
    margin-top: 20px;
}

button {
    background-color: #ff69b4;
}
</style>

  