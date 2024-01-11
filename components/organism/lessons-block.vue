<template>
    <div class="w-full h-auto py-8 bg-lightPurple rounded-lg overflow-hidden">
        <h2 class="px-4 text-2xl font-bold">
            {{ $t('lesson_block_title') }}
        </h2>
        <p class="mt-1 px-4">
            {{ $t('lesson_block_p') }}
        </p>
        <div class="mt-8 slider">
            <div class=" flex overflow-auto mr-0">
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
            </div>
            <div class=" flex overflow-auto mr-0">
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
                <OrganismLessonCard state="purple" />
                <OrganismLessonCard />
            </div>
        </div>
        <div class="mt-2 slider">
            <div class=" flex overflow-auto mr-0">
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
            </div>
            <div class=" flex overflow-auto mr-0">
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
                <OrganismLessonCard />
                <OrganismLessonCard state="orange" />
            </div>
        </div>
        <div class="mt-2 slider">
            <div class=" flex overflow-auto mr-0">
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
            </div>
            <div class=" flex overflow-auto mr-0">
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
                <OrganismLessonCard state="green" />
                <OrganismLessonCard />
            </div>

        </div>
    </div>
</template>
<style scoped>
.slider {
    display: flex;
    height: 80px;
    width: 4000px;
    transform: translateX(0px);
    animation: 30s linear 0s infinite normal none running marqueeAnimation;
    /* border: solid; */
}

@keyframes marqueeAnimation {
    100% {
        transform: translateX(-2000px);
    }
}
</style>
