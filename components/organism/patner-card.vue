<template>
    <div
        class="px-5 pt-8 pb-5 flex flex-col justify-between gap-3 rounded-lg bg-lightOrange sm:px-10 sm:pt-10 max-h-[350px]">
        <div class="flex flex-col w-full gap-3">
            <span class="font-baloo text-lg">
                {{ $t('partner_title') }}
            </span>
            <p class="text-sm sm:text-base">
                {{ $t('partner_p') }}
            </p>
        </div>
        <div class="w-full mt-11">
            <!-- <AtomsFullBtn :libelle="$t('contact_us')" :state="true" /> -->
            <a href="#contact"
                class="flex items-center justify-center w-full py-3 bg-noir text-white font-baloo rounded-full">
                {{ $t('contact_us') }}
            </a>
        </div>
    </div>
</template>
<script>
</script>