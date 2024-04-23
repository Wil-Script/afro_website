<template>
    <button class="w-full py-3 bg-white font-baloo rounded-full border border-noir">
        {{libelle}}
    </button>
</template>
<script setup>
defineProps({
    libelle:{
        type: String,
        required: true,
    }
})
</script>