<template>
    <div v-if="state == 'coin'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                Coins system
            </span>
            <span class="text-xs">
                Lorem ipsum dolor sit amet
            </span>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/reward.png" class="w-[150px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'favourite'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                Favourite
            </span>
            <span class="text-xs">
                Keep your favorite words in sight.
            </span>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/heart.png" class="w-[150px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'theme'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                Word by theme
            </span>
            <span class="text-xs">
                Learn according to specific fields.
            </span>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <NuxtImg src="/theme.png" class="w-[150px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'lang'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                Many languages
            </span>
            <span class="text-xs">
                Learn many languages in one time.
            </span>
        </div>
        <div class="flex justify-center items-center px-2 w-full h-auto">
            <!-- <NuxtImg src="/lang.png" class="w-[200px] aspect-square object-contain" alt="" /> -->
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