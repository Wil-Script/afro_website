<template>
    <button class="w-full py-3 bg-white font-baloo rounded-full" :class="{'activ':state}">
        {{ libelle }}
    </button>
</template>
<script setup>
defineProps({
    libelle: {
        type: String,
        required: true,
    },
    state:{
        type: Boolean,
        default: false,
    }
})
</script>
<style>
    button.activ{
        background: #202020;
        color: white;
    }
</style>