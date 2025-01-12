<script setup>
 import typingText from './typingText.vue';
</script>

<template>
  <div id="Home" class="w-[70%] m-auto py-72 h-[900px] max-sm:grid max-sm:grid-cols-1 max-sm:gap-2 p-2 max-sm:w-[90%] max-sm:h-auto max-sm:pb-20" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
     <div class="w-full text-6xl max-sm:text-center">
        <h1 class=" animate-bounce">Hello World</h1>
     </div>
     <div class="">
       <img src="/public/images/rai.png" class=" w-[250px] max-sm:m-auto md:float-right md:-mt-5" alt="">
      </div>
      <p class=" text-4xl font-extralight mt-7">
        <typingText></typingText>
      </p>

    </div>
</template>




<style scoped>

</style>
