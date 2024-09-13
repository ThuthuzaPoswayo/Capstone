<template>
    <div class="container-fluid footer">
      <div class="row justify-content-center">
        <p class="lead">
          ThutzBeauty &copy; <span id="currYear"></span>
 </p>

      

    <div class="social-icons">

      <a href ="https://github.com/ThuthuzaPoswayo"><i class="bi bi-github"></i></a> 
      <a href="https://mail.google.com/"> <i class="bi bi-linkedin"></i></a>
      <a href="#"  title="facebook"> 
    <i class="fa fa-facebook-square" aria-hidden="true"></i>
  </a>
  <a href="#" title="twitter"> 
    <i class="fa fa-twitter-square" aria-hidden="true"></i>
  </a>
  <a href="#" title="instagram">  
    <i class="fa fa-instagram" aria-hidden="true"></i></a>
    </div>
  </div>
  <a href="#"  title="facebook"> 
    <i class="fa fa-facebook-square" aria-hidden="true"></i>
  </a>
  <a href="#" title="twitter"> 
    <i class="fa fa-twitter-square" aria-hidden="true"></i>
  </a>
  <a href="#" title="instagram">  
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </a>

 

 
</div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>

  .footer {
    background: linear-gradient(to right, #fce4ec, #f8bbd0, #f48fb1); 
    padding: 20px;
  }
  
  .lead {
    font-family: "Abril Fatface", serif;
    font-weight: bolder;
    color: #333;
    text-align: center;
    margin: 0;
  }
  .social-icons{
	padding:30px;
	background-color: #fce4ec, #f8bbd0, #f48fb1;
  text-align: center;
}
.social-icons a{
	color:#fff;
  line-height:30px;
  font-size:30px;
  margin: 0 5px;
  text-decoration:none;
  
}
.social-icons a i{
	line-height:30px;
  font-size:30px;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1); 
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1); 
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1);
  transition: all 200ms ease-in;
  transform: scale(1);
}
.social-icons a:hover i{
  box-shadow: 0px 0px 150px #000000;
  z-index: 2;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.5);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.5);   
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.5);
  transition: all 200ms ease-in;
  transform: scale(1.5);
}
  </style>
  