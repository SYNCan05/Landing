<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>
<template> 
    <div class=" ">
        <button v-if="isOpen" @click="isOpen = !isOpen" class="md:hidden m-auto"><img src="../assets/images/close.png" alt="" width="30px"></button>
        
        <button v-else @click="isOpen = !isOpen" class="md:hidden m-auto"><img src="../assets/images/menu.png" alt="" width="35px"></button>
        
    </div>
</template>