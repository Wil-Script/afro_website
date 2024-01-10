<template>
    <header id="home"
        class=" px-4 pt-8 flex flex-col gap-y-8 justify-between w-full bg-mainColor sm:pl-[7.5vw] sm:pb-4 sm:pt-4 sm:rounded-lg sm:grid sm:grid-cols-2 sm:gap-12 sm:pr-4">
        <div class="flex flex-col gap-y-2 w-full h-auto sm:pt-12">
            <h1 class="font-bold text-3xl text-center text-[#2C1A09] sm:text-5xl sm:text-left">
                Apprendre une langue, découvrir une culture.
            </h1>
            <p class=" text-center text-sm sm:text-xl sm:text-left sm:max-w-screen-sm sm:mt-4">
                Plongez dans l'univers des langues africaines. Apprenez-en une et laissez-vous transporter par ses sons, ses
                rythmes et ses histoires.
            </p>
            <div class="w-full sm:w-[270px] mt-10" @click="$emit('openContact')">
                <AtomsFullBtn libelle="Rejoindre la liste exclusive" />
            </div>

            <div class="hidden sm:flex gap-2 mt-10">
                <NuxtImg src="/avatars.png" class="w-auto h-12" alt="flysoft logo" />
                <div class="flex flex-col">
                    <span class="text-sm">Rejoignez-nous</span>
                    <span class="font-bold">+1500 personnes</span>
                </div>
            </div>
        </div>
        <div class="img relative w-full bg-DarkmainColor p-5">
            <div class="absolute sm:left-16 top-16 flex w-full first-img">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/cameroon.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Wouh di youah</span>
                        <span class="text-[10px]">Bangou</span>
                    </div>
                </div>
            </div>
            <div class="absolute sm:pr-16 top-[50%] flex justify-end w-full second-img">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/nigeria.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Oju ojo dara</span>
                        <span class="text-[10px]">Yoruba</span>
                    </div>
                </div>
            </div>
            <div class="absolute left-8 sm:left-20 sm:bottom-10 bottom-4 flex w-full third-img">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/congo.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Na lingi yo</span>
                        <span class="text-[10px]">Lingala</span>
                    </div>
                </div>
            </div>
            <NuxtImg src="/afrolingo-app2.png" class="image w-full sm:w-1/2" alt="flysoft logo" />
        </div>
    </header>
</template>
<script setup>
</script>
<style scoped>
header {
    height: calc(100vh - 60px);
}

.image {
    animation: appear 1.2s ease-in-out;
}

.first-img {
    animation-delay: 3s;
    animation: appear 2.5s ease-in-out;

}

.second-img {
    animation-delay: 3s;
    animation: appear 3s ease-in-out;

}

.third-img {
    animation-delay: 3s;
    animation: appear 3.5s ease-in-out;

}

@keyframes appear {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

.img {
    height: calc(100% - 35%);
    border-radius: 56px 56px 0 0;
    overflow: hidden;
}

@media only screen and (min-width: 640px) {
    header {
        margin: 0 2.5%;
        height: 70vh;
        width: 95%;
    }

    .img {
        height: 100%;
        border-radius: 56px;
        overflow: hidden;
    }

    h1 {
        line-height: 4rem;
    }

    .img img {
        margin-left: 25%;
    }

}
</style>