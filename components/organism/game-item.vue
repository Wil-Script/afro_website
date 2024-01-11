<template>
    <div v-if="state == 'game-one'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('game_title') }} 1
            </span>
            <span class="text-xs">
                {{ $t('game1_p') }}
            </span>
        </div>
        <div class="px-2 w-full h-auto">
            <NuxtImg src="/choices.png" class="w-[200px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'game-two'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('game_title') }} 2
            </span>
            <span class="text-xs">
                {{ $t('game2_p') }}
            </span>
        </div>
        <div class="px-2 w-full h-auto">
            <NuxtImg src="/quizz.png" class="w-[200px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'game-three'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('game_title') }} 3
            </span>
            <span class="text-xs">                
                {{ $t('game3_p') }} <br>
            </span>
        </div>
        <div class="px-2 w-full h-auto">
            <NuxtImg src="/sentence.png" class="w-[200px] aspect-square object-contain" alt="" />
        </div>
    </div>
    <div v-else-if="state == 'game-four'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                {{ $t('game_title') }} 4
            </span>
            <span class="text-xs">
                {{ $t('game4_p') }} <br>
            </span>
        </div>
        <div class="px-2 w-full h-auto">
            <NuxtImg src="/choices.png" class="w-[200px] aspect-square object-contain" alt="" />
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