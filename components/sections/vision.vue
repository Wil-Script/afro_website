<script>

</script>
<template>
    <section class=" mt-12 gap-y-4 flex flex-col w-full h-auto sm:px-[10vw] sm:mt-28">
        <div class=" px-5">
            <span class="font-bold text-2xl">
                {{ $t('more_than_app') }}
            </span>
            <div>

            </div>
        </div>
        <div class="pl-5 overflow-auto whitespace-nowrap w-full sm:grid sm:grid-cols-3 sm:overflow-hidden sm:whitespace-normal sm:gap-4
        ">
            <OrganismVisionCard type="culture" :title="$t('culture_title')" :desc="$t('culture_p')" />
            <OrganismVisionCard type="rich" :title="$t('rich_title')" :desc="$t('rich_p')" />
            <OrganismVisionCard type="comm" :title="$t('com_title')" :desc="$t('com_p')" />
        </div>
        <!-- <div class="px-5 w-full h-auto mt-5 sm:hidden" @click="$emit('openContact')">
            <AtomsOutlinedBtn :libelle="$t('waiting_list')" />
        </div> -->
        <div class="px-5 w-full h-auto mt-5 sm:hidden">
            <a href="#contact"
                class="flex items-center justify-center w-full py-3 bg-white font-bold rounded-full border border-noir">
                {{ $t('waiting_list') }}
            </a>
        </div>
    </section>
</template>
<style scoped></style>