<template>
    <div v-if="state == 'game-one'"
        class="mr-2 py-4 inline-flex flex-col justify-between h-[260px] w-[220px] bg-white rounded-lg">
        <div class="px-4 flex flex-col w-full h-auto">
            <span class="text-sm font-bold">
                Jeu 1
            </span>
            <span class="text-xs">
                Illustrations to help you remember.
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
                Jeu 2
            </span>
            <span class="text-xs">
                Play quizzes and discover new words.
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
                Jeu 3
            </span>
            <span class="text-xs">
                Single-choice questions. <br>
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
                Jeu 4
            </span>
            <span class="text-xs">
                Complete sentences. <br>
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