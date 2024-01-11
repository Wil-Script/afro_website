<template>
    <div class=" w-full h-auto py-8 bg-lightGreen rounded-lg overflow-hidden">
        <div class="relative px-4 flex flex-col w-full h-auto">
            <h2 class="text-2xl font-bold">
                {{ $t('chapter_title') }}
            </h2>
            <p class="mt-1">
                {{ $t('chapter_p') }}
            </p>
        </div>
        <div class="mt-8 slider">
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismChapterCard />
                <OrganismChapterCard state="green" />
                <OrganismChapterCard />
                <OrganismChapterCard state="orange" />
                <OrganismChapterCard />
                <OrganismChapterCard state="purple" />
            </div>
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismChapterCard />
                <OrganismChapterCard state="green" />
                <OrganismChapterCard />
                <OrganismChapterCard state="orange" />
                <OrganismChapterCard />
                <OrganismChapterCard state="purple" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.slider {
    display: flex;
    height: auto;
    width: 2736px;
    transform: translateX(0px);
    animation: 25s linear 0s infinite normal none running marqueeAnimation;
}

@keyframes marqueeAnimation {
    100% {
        transform: translateX(-1368px);
    }
}
</style>