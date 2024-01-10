<template>
    <div v-if="state == ''" class="inline-flex items-center gap-x-2 h-20 w-[250px] bg-white rounded-[18px] mr-2 p-2">
        <div class="h-full aspect-square rounded-[12px] bg-[#eee]"></div>
        <div class="flex flex-col gap-y-1 w-full h-auto">
            <div class="h-3 w-2/3 rounded-lg bg-[#eee]"></div>
            <div class="h-3 w-1/3 rounded-lg bg-[#eee]"></div>
        </div>
    </div>
    <div v-else-if="state == 'purple'"
        class="inline-flex items-center gap-x-2 h-20 w-[250px] bg-white rounded-[18px] mr-2 p-2">
        <div class="flex justify-center items-center h-full p-2 aspect-square rounded-[12px] bg-lightPurple">
            <NuxtImg src="greet.png" class=" w-8 aspect-square" alt="" />
        </div>
        <div class="flex flex-col gap-y-1 w-full h-auto">
            <div class="h-3 text-xs font-bold">Salutations</div>
            <div class="text-xs text-grisTxt">Apprendre à saluer à tout moment</div>
        </div>
    </div>
    <div v-if="state == 'green'" class="inline-flex items-center gap-x-2 h-20 w-[250px] bg-white rounded-[18px] mr-2 p-2">
        <div class="flex justify-center items-center h-full p-2 aspect-square rounded-[12px] bg-lightGreen">
            <NuxtImg src="move.png" class=" w-8 aspect-square" alt="" />
        </div>
        <div class="flex flex-col gap-y-1 w-full h-auto">
            <div class="h-3 text-xs font-bold">Déplacement</div>
            <div class="text-xs text-grisTxt">Découvrir les expressions pour se déplacer.</div>
        </div>
    </div>
    <div v-if="state == 'orange'" class="inline-flex items-center gap-x-2 h-20 w-[250px] bg-white rounded-[18px] mr-2 p-2">
        <div class="flex justify-center items-center h-full p-2 aspect-square rounded-[12px] bg-lightOrange">
            <NuxtImg src="count.png" class=" w-8 aspect-square" alt="" />
        </div>
        <div class="flex flex-col gap-y-1 w-full h-auto">
            <div class="h-3 text-xs font-bold">Compter</div>
            <div class="text-xs text-grisTxt">Découvrir les chiffres et les nombres.</div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
})
</script>