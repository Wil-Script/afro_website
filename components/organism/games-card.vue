<template>
    <div class="w-full h-auto py-8 bg-lightGreen rounded-lg overflow-hidden">
        <div class="relative px-4 flex flex-col w-full h-auto">
            <h2 class="text-2xl font-bold">
                {{ $t('game_block_title') }}
            </h2>
            <p class="mt-1">
                {{ $t('game_block_p') }}
            </p>
        </div>
        <div class="mt-8 slider">
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismGameItem state="game-one" />
                <OrganismGameItem state="game-two" />
                <OrganismGameItem state="game-three" />
                <OrganismGameItem state="game-four" />
            </div>
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismGameItem state="game-one" />
                <OrganismGameItem state="game-two" />
                <OrganismGameItem state="game-three" />
                <OrganismGameItem state="game-four" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.slider {
    display: flex;
    height: 260px;
    width: 1920px;
    transform: translateX(0px);
    animation: 20s linear 0s infinite normal none running marqueeAnimation;
}

@keyframes marqueeAnimation {
    100% {
        transform: translateX(-960px);
    }
}
</style>