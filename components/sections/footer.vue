<template>
    <footer
        class="mt-[90px] pt-10 px-5 w-full h-auto border-t border-[#e5e5e5] sm:px-[10vw] sm:flex sm:justify-between sm:items-center sm:py-8">
        <div class=" sm:max-w-[200px] sm:w-full" @click="$emit('openContact')">
            <AtomsOutlinedBtn :libelle="$t('waiting_list')" />
        </div>
        <div class="mt-10 flex flex-col items-center w-full h-auto gap-4 sm:flex-row sm:w-auto sm:mt-0 sm:gap-6">
            <Nuxt-link to="conditions" class="text-xs sm:text-sm">{{ $t('condition') }}</Nuxt-link>
            <!-- <Nuxt-link to="#" class="text-xs sm:text-sm">{{ $t('privacy') }}</Nuxt-link> -->
            <span class="text-xs sm:text-sm">@Afrolingo 2024</span>
        </div>
    </footer>
</template>