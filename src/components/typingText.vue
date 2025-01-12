<script setup>
import {ref, onMounted} from 'vue'

const text = ref('');
const typing = ref(false);
const typingSpeed = ref(70);
const textToType = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic ducimus velit eligendi ipsa veritatis, facilis incidunt, sapiente itaque at, ut reiciendis quas. Quisquam blanditiis incidunt harum vitae accusantium inventore.'

    onMounted(()=>{
        typing.value = true
        typeText()
    })

    function typeText() {
        let i = 0;
        const interval = setInterval(()=>{
            if(i < textToType.length){
                text.value += textToType[i]
                i++
            }else{
                clearInterval(interval)
                typing.value = false
            }
        }, typingSpeed.value)
    }
</script>

<template>
    <div>
        <span :class="{'animate-typing': typing}">{{ text }}</span>
        <span class="animate-ping">_</span>
    </div>
</template>