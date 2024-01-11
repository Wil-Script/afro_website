<script>
export default {
    data() {
        return {
            visible: false,
        }
    },
    mounted() {
        setInterval(() => {
            this.visible = !this.visible;
            console.log(this.visible);
        }, 5000);
    }
}
</script>

<template>
    <header
        class=" px-4 pt-8 flex flex-col gap-y-8 justify-between w-full bg-mainColor sm:pl-[7.5vw] sm:pb-4 sm:pt-4 sm:grid sm:grid-cols-2 sm:gap-12 sm:pr-4">
        <div class="flex flex-col gap-y-2 w-full h-auto sm:pt-12">
            <h1 class="font-bold text-3xl text-center text-[#2C1A09] sm:text-5xl sm:text-left">
                {{ $t('header_title') }}
            </h1>
            <p class=" text-center text-sm sm:text-xl sm:text-left sm:max-w-screen-sm sm:mt-4">
                {{ $t('header_p') }}
            </p>
            <!-- <div class="w-full sm:w-[270px] mt-10" @click="$emit('openContact')">
                <AtomsFullBtn :libelle="$t('waiting_list')" />
            </div> -->
            <div class="w-full sm:w-[270px] mt-10">
                <a href="#contact"
                    class="flex items-center justify-center w-full py-3 bg-white text-noir font-bold rounded-full">
                    {{ $t('waiting_list') }}
                </a>
            </div>

            <div class="hidden sm:flex gap-2 mt-10">
                <NuxtImg src="/avatars.png" class="w-auto h-12" alt="" />
                <div class="flex flex-col">
                    <span class="text-sm">{{ $t('join_us') }}</span>
                    <span class="font-bold">+1500 {{ $t('persons') }}</span>
                </div>
            </div>
        </div>
        <div class="img relative w-full bg-DarkmainColor p-5">
            <div class="absolute sm:left-20 top-16 flex w-full first-img" v-show="visible == true">
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
            <div class="absolute sm:pr-20 top-[30%] flex justify-end w-full second-img" v-show="visible == true">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/nigeria.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">E kaaro</span>
                        <span class="text-[10px]">Yoruba</span>
                    </div>
                </div>
            </div>
            <div class="absolute sm:pr-32 top-[70%] flex justify-end w-full second-img" v-show="visible == true">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/ghana.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Maakye</span>
                        <span class="text-[10px]">Twi</span>
                    </div>
                </div>
            </div>
            <div class="absolute left-8 sm:left-32 sm:bottom-10 bottom-4 flex w-full third-img" v-show="visible == true">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/congo.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Mbote</span>
                        <span class="text-[10px]">Lingala</span>
                    </div>
                </div>
            </div>

            <div class="absolute sm:left-20 top-16 flex w-full first-img" v-show="visible == false">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/ethiopie.jpg" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Indemin nawot</span>
                        <span class="text-[10px]">Amharic</span>
                    </div>
                </div>
            </div>
            <div class="absolute sm:pr-20 top-[30%] flex justify-end w-full second-img" v-show="visible == false">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/guinee.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Ba nun</span>
                        <span class="text-[10px]">Kpelle</span>
                    </div>
                </div>
            </div>
            <div class="absolute sm:pr-32 top-[70%] flex justify-end w-full second-img" v-show="visible == false">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/zimbabwe.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Dumela</span>
                        <span class="text-[10px]">Setswana</span>
                    </div>
                </div>
            </div>
            <div class="absolute left-8 sm:left-32 sm:bottom-10 bottom-4 flex w-full third-img" v-show="visible == false">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/senegal.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-bold">Salamalekum</span>
                        <span class="text-[10px]">Wolof</span>
                    </div>
                </div>
            </div>
            <NuxtImg src="/afrolingo-app2.png" class="image w-full sm:w-1/2" alt="" />
        </div>
    </header>
</template>
<style scoped>
header {
    height: calc(100vh - 60px);
}

.image {
    animation: appear 1.2s ease-in-out;
}

.first-img {
    animation: appear2 1.5s ease-in-out;
}

.second-img {
    animation: appear2 2s ease-in-out;
}

.third-img {
    animation: appear2 2.4s ease-in-out;
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

@keyframes appear2 {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
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
        height: 75vh;
        max-height: 80vh;
        width: 95%;
        border-radius: 46px;
    }

    .img {
        height: 100%;
        border-radius: 36px;
        overflow: hidden;
    }

    h1 {
        line-height: 4rem;
    }

    .img>img {
        margin-left: 25%;
    }

}
</style>