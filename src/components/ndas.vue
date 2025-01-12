<script setup>
import { ref } from 'vue';
import dropdown from './dropdown.vue';
import hamburger from './hamburger.vue';

const showDropDown = ref(false);

const Menu = ref([
    {name:'Home',href:'#Home'},
    {name:'About',href:'#About'},
    {name:'Contact',href:'#Contact'},
])
</script>

<template>
    <dropdown v-if="showDropDown"/>
    <div class="flex justify-evenly p-5 text-black items-center fixed w-full z-50 backdrop-blur-[8px]  border-b-2 border-slate-200 max-sm:justify-between">
        <img src="/public/images/logo.png" alt="" width="50px">
        <ul class="flex justify-evenly text-1xl font-thin w-[50%] max-sm:hidden ">
            <li v-for="item in Menu" :key="item.name" class=" hover:scale-125">
                <a :href="item.href" class="hover:text-sky-800">{{ item.name }}</a>
            </li>
        </ul>
        <button class=" bg-sky-700 p-3 rounded-full text-white max-sm:hidden">FOLLOW ME!</button>
        <hamburger @click="showDropDown = !showDropDown"></hamburger>

    </div>
</template>

<!-- <script>
export default{
    data() {
        return {
            showDropDown : false
        }
    },
}
</script> -->

<style scoped>
</style>