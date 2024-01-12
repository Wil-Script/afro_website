<template>
    <div class="flex items-center gap-3 w-[160px] h-12 mr-8 rounded-full" :class="{
        'bg-lightGreen': color == 'green',
        'bg-lightOrange': color == 'orange',
        'bg-lightPurple': color == 'purple',
    }">
        <div class="ml-2 h-8 aspect-square rounded-full flex justify-center items-center" :class="{
            'bg-littleDarkGreen': color == 'green',
            'bg-littleDarkOrange': color == 'orange',
            'bg-littleDarkPurple': color == 'purple',
        }">
            <NuxtImg v-if="color == 'orange'" src="/drum.png" class="h-5" alt="flysoft logo" />
            <NuxtImg v-else-if="color == 'green'" src="/gorilla.png" class="h-5" alt="flysoft logo" />
            <NuxtImg v-else src="/sun.png" class="h-5" alt="flysoft logo" />
        </div>
        <span>
            {{ lang }}
        </span>
    </div>
</template>
<script setup>
defineProps({
    lang: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})
</script>