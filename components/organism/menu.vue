<template>
    <div class="px-5 w-full h-[60px] sm:h-[80px] sm:px-[10vw]">
        <div class="flex justify-between items-center h-full w-full sm:hidden">
            <NuxtImg src="/afrolingo-logo.png" class="h-10" alt="flysoft logo" />
            <NuxtImg src="/afrolingo-text.png" class="h-5" alt="flysoft logo" />
        </div>
        <div class="hidden justify-between items-center h-full w-full sm:flex">
            <NuxtImg src="/afrolingo-logo-full.png" class="h-10" alt="flysoft logo" />
            <nav class="flex gap-4">
                <a href="#home" class="text-sm">
                    Accueil
                </a>
                <a href="#features" class="text-sm">
                    Fonctionnalités
                </a>
                <a href="#contact" class="text-sm">
                    Contacts
                </a>
            </nav>
            <div class="w-[180px]" @click="$emit('openContact')">
                <AtomsFullBtn :state="true" libelle="Contact us" />
            </div>
        </div>
    </div>
</template>
<script setup>
</script>