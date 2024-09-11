<template>
  <main>
    <NavBar/>
    <router-view/>
  
    <Footer/>

  </main>
 
</template>
<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default{
  components:{
    NavBar,
    Footer
  }
}
</script>





