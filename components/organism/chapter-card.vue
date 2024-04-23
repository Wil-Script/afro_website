<template>
    <div v-if="state == ''" class="mr-2 p-4 inline-flex flex-col justify-between h-[250px] w-[200px] bg-white rounded-lg">
        <div class="flex justify-between w-full h-auto">
            <div class="h-6 w-14 rounded-full bg-[#eee]"></div>
            <div class="h-6 w-10 rounded-full bg-[#eee]"></div>
        </div>

        <div class="w-full">
            <div class="w-full h-2 rounded-full bg-[#eee]">
                <div class="w-2/3 h-2 rounded-full bg-[#d9d9d9]"></div>
            </div>
            <div class="mt-2 flex flex-col gap-y-1">
                <div class="w-full h-6 rounded-full bg-[#eee]" v-for="items in 2">

                </div>
            </div>
        </div>
        <div class="flex items-center justify-center text-white font-baloo text-sm w-full h-8 rounded-full bg-[#eee]">
        </div>
    </div>
    <div v-else-if="state == 'green'"
        class="mr-2 p-4 inline-flex flex-col justify-between h-[250px] w-[200px] bg-white rounded-lg">
        <div class="flex justify-between w-full h-auto">
            <span class="px-2 flex items-center justify-center h-6 w-auto rounded-full bg-lightGreen text-[10px]">
                {{ $t('chapter') }} 4
            </span>
            <span class="px-2 flex items-center justify-center h-6 w-auto rounded-full border border-[#eee] text-[10px]">
                12 {{ $t('lesson') }}
            </span>
        </div>

        <div class="w-full">
            <div class="w-full h-2 rounded-full bg-lightGreen">
                <div class="w-2/3 h-2 rounded-full bg-mainGreen"></div>
            </div>
            <div class="mt-2 flex flex-col gap-y-1">
                <div class="w-full h-6 rounded-full bg-[#eee]" v-for="items in 2">

                </div>
            </div>
        </div>
        <div class="flex items-center justify-center text-white font-baloo text-sm w-full h-8 rounded-full bg-mainGreen">
            {{ $t('start') }}
        </div>
    </div>
    <div v-else-if="state == 'orange'"
        class="mr-2 p-4 inline-flex flex-col justify-between h-[250px] w-[200px] bg-white rounded-lg">
        <div class="flex justify-between w-full h-auto">
            <span class="px-2 flex items-center justify-center h-6 w-auto rounded-full bg-lightOrange text-[10px]">
                {{ $t('chapter') }} 8
            </span>
            <span class="px-2 flex items-center justify-center h-6 w-auto rounded-full border border-[#eee] text-[10px]">
                8 {{ $t('lesson') }}
            </span>
        </div>

        <div class="w-full">
            <div class="w-full h-2 rounded-full bg-lightOrange">
                <div class="w-2/3 h-2 rounded-full bg-mainColor"></div>
            </div>
            <div class="mt-2 flex flex-col gap-y-1">
                <div class="w-full h-6 rounded-full bg-[#eee]" v-for="items in 2">

                </div>
            </div>
        </div>
        <div class="flex items-center justify-center text-white font-baloo text-sm w-full h-8 rounded-full bg-mainColor">
            {{ $t('start') }}
        </div>
    </div>
    <div v-else-if="state == 'purple'"
        class="mr-2 p-4 inline-flex flex-col justify-between h-[250px] w-[200px] bg-white rounded-lg">
        <div class="flex justify-between w-full h-auto">
            <span class="px-2 flex items-center justify-center h-6 w-auto rounded-full bg-lightPurple text-[10px]">
                {{ $t('chapter') }} 8
            </span>
            <span class="px-2 flex items-center justify-center h-6 w-auto rounded-full border border-[#eee] text-[10px]">
                16 {{ $t('lesson') }}
            </span>
        </div>

        <div class="w-full">
            <div class="w-full h-2 rounded-full bg-lightPurple">
                <div class="w-2/3 h-2 rounded-full bg-mainPurple"></div>
            </div>
            <div class="mt-2 flex flex-col gap-y-1">
                <div class="w-full h-6 rounded-full bg-[#eee]" v-for="items in 2">

                </div>
            </div>
        </div>
        <div class="flex items-center justify-center text-white font-baloo text-sm w-full h-8 rounded-full bg-mainPurple">
            {{ $t('start') }}
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