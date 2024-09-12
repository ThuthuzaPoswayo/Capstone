<template>
    <div class="card-wrapper">
        <div class="card">
            <div class ="card-front">
                <slot name="cardHeader"></slot>
                <slot name="cardBody"></slot> 
            </div>
        <slot name="serviceSlot"></slot>
   
     

        </div>
    </div>
  </template>

  <script>
  export default {
   name: "CardComp"
  }
  </script>
  
  <style scoped>
  
  </style>