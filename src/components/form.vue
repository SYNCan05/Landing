<script setup>
import { ref } from 'vue';
    
    const card = ref([
        {name:'Muhammad Sidiq',link:`/public/images/gambar6.JPG`,judul:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis hic soluta amet eligendi suscipit!'},
        {name:'Sidiq Yuliyanto',link:`/public/images/gambar2.JPG`,judul:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis hic soluta amet eligendi suscipit!'},
        {name:'Lorem Ipsum',link:'/public/images/gambar3.JPG',judul:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis hic soluta amet eligendi suscipit!'},
        
    ])
</script>

<template>
    <div id="About" class="w-[70%] m-auto my-8 max-sm:pt-60 " >
    <div class="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-10">
            <div v-for="item in card" :key="card.name" class="  text-black py-3 px-2 rounded-lg transform hover:scale-105 cursor-pointer hover:outline hover:outline-sky-300 transition duration-500 ease-in-out hover:outline-[2px] flex flex-col text-center gap-2">
                <img :src="item.link" alt="" width="200" class="hover:cursor-default m-auto lg:w-[300px]">
                <span  class=" font-semibold text-2xl ">{{ item.name }}</span>
                <p>{{ item.judul }}</p>
                
            </div>
        </div>
    </div>
</template>
