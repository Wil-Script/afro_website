<template>
    <div class="w-full h-auto py-8 bg-lightOrange rounded-lg overflow-hidden">
        <div class="relative px-4 flex flex-col w-full h-auto">
            <h2 class="text-2xl font-baloo">
                {{ $t('evolution_block_title') }}
            </h2>
            <p class="mt-1">
                {{ $t('evolution_block_p') }}
            </p>
        </div>
        <div class="mt-8 slider">
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismEvolutionCard state="coin" />
                <OrganismEvolutionCard state="favourite" />
                <OrganismEvolutionCard state="theme" />
                <OrganismEvolutionCard state="lang" />
            </div>
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismEvolutionCard state="coin" />
                <OrganismEvolutionCard state="favourite" />
                <OrganismEvolutionCard state="theme" />
                <OrganismEvolutionCard state="lang" />
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