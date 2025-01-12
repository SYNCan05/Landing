<script setup>

import { ref } from 'vue';

const Menu = ref([
    {name:'Home',href:'#Home'},
    {name:'About',href:'#About'},
    {name:'Contact',href:'#Contact'},
])
</script>
<template>
    <div class="dropdown fixed bg-slate-500/[0.48] backdrop-blur-[12px] saturate-[1.76] contrast-[2]divide-y divide-gray-100 text-black rounded-lg shadow w-full top-24 z-10 ">
    <ul class="py-2 text-sm " aria-labelledby="dropdownDefaultButton">
      <li v-for="item in Menu" :key="item.name">
        <a :href="item.href" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{item.name}}</a>
      </li>
    </ul>
</div>
</template>

<script>
</script>

<style scoped></style>