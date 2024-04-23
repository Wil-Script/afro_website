<template>
    <div class="p-4 pb-6 mr-5 w-[80%] h-[350px] inline-flex flex-col justify-between rounded-lg sm:w-full sm:h-[350px] sm:mr-0"
        :class="{ 'bg-lightOrange': type == 'culture', 'bg-lightPurple': type == 'comm', 'bg-lightGreen': type == 'rich' }">
        <div class="flex items-center justify-center h-14 w-14 rounded-md"
            :class="{ 'bg-littleDarkOrange': type == 'culture', 'bg-littleDarkPurple': type == 'comm', 'bg-littleDarkGreen': type == 'rich' }">
            <NuxtImg v-if="type == 'rich'" src="/richness-african-languages-afrolingo.png" class="w-8" alt="flysoft logo" />
            <NuxtImg v-if="type == 'culture'" src="/culture-afrolingo.png" class="w-8" alt="flysoft logo" />
            <NuxtImg v-if="type == 'comm'" src="/community.png" class="w-8" alt="flysoft logo" />
        </div>
        <div class="whitespace-normal">
            <span class=" font-baloo whitespace-normal sm:text-lg">
                {{ title }}
            </span>
            <p class="mt-2 text-sm whitespace-normal">
                {{ desc }}
            </p>
        </div>
    </div>
</template>
<script setup>
defineProps({
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
})
</script>