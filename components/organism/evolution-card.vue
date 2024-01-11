<template>
    <div v-if="state == 'coin'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('evol1_title') }}
            </span>
            <p class="text-xs">
                {{ $t('evol1_p') }}
            </p>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/reward.png" class="w-[150px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'favourite'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('evol2_title') }}
            </span>
            <p class="text-xs">
                {{ $t('evol2_p') }}
            </p>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/heart.png" class="w-[150px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'theme'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('evol3_title') }}
            </span>
            <p class="text-xs">
                {{ $t('evol3_p') }}
            </p>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/theme.png" class="w-[150px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'lang'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('evol4_title') }}
            </span>
            <p class="text-xs">
                {{ $t('evol4_p') }}
            </p>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/lang_1.png" class="ml-[20px] w-[160px] aspect-square object-contain" alt="" />
        </div>
    </div>
</template>
<script setup>
defineProps({
    state: {
        type: String,
        default: ''
    },
})

</script>