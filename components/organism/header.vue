<script>
export default {
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        async download() {
            this.loader = true
            let new_date = new Date()
            const audio_link = ref('')
            // await addMedia(this.file_audio, 'alphabet_audio').then((response) => audio_link.value = response)
            let download = {
                downLoadAt: new_date.getTime(),
            }
            await addDoc(download, `download`)
        }
    },
    mounted() {
        setInterval(() => {
            this.visible = !this.visible;
        }, 5000);
    }
}
</script>

<template>
    <header
        class=" px-4 pt-8 flex flex-col gap-y-8 justify-between w-full bg-mainColor md:pl-[7.5vw] md:pb-4 md:pt-4 sm:grid md:grid-cols-2 md:gap-16 md:pr-4">
        <div class="flex flex-col md:justify-center gap-y-2 w-full h-auto md:pt-10">
            <h1 class="font-baloo text-3xl text-center text-[#2C1A09] md:text-4xl md:text-left font-baloo"
                style="line-height: 44px;">
                {{ $t('header_title') }}
            </h1>
            <p class=" text-center text-sm md:text-base sm:text-left md:max-w-screen-sm md:mt-4">
                {{ $t('header_p') }}
            </p>
            <div class=" flex flex-col lg:grid lg:grid-cols-2 lg:gap-3 w-[90%] mt-10">
                <div class="flex flex-col gap-1">
                    <a href="https://play.google.com/store/apps/details?id=afrolingo.com.afrolingo&gl=FR"
                        target="_blank"
                        class="flex gap-2 items-center justify-center w-full py-3 bg-white text-noir text-sm font-semibold rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M239.82,114.18,72,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,48,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.76,15.76,0,0,0,0-27.64ZM160,139.31l18.92,18.92-88.5,50.66ZM90.4,47.1l88.53,50.67L160,116.69ZM193.31,150l-22-22,22-22,38.43,22Z">
                            </path>
                        </svg>
                        {{ $t('download_play') }}
                    </a>
                    <span class=" text-xs text-transparent"> *Déjà disponible</span>
                </div>
                <div class="flex flex-col gap-1">
                    <a href="#"
                        class="flex gap-2 items-center justify-center w-full py-3 bg-transparent text-sm border border-noir text-noir font-semibold rounded-full cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4ZM223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Z">
                            </path>
                        </svg>
                        {{ $t('download_ios') }}
                    </a>
                    <span class=" text-xs"> *{{ $t('soon') }}</span>
                </div>
            </div>

            <div class="hidden sm:flex gap-2 mt-10">
                <NuxtImg src="/avatars.png" class="w-auto h-10" alt="" />
                <div class="flex flex-col">
                    <span class="text-sm">{{ $t('join_us') }}</span>
                    <span class="font-semibold">+1500 {{ $t('persons') }}</span>
                </div>
            </div>
            <div class="hidden sm:flex w-auto max-w-60 h-auto items-center gap-4 mt-10">
                <div class=" text-sm">
                    {{ $t('follow_us') }} :
                </div>
                <div class="flex w-auto h-auto gap-2">
                    <a href="https://www.instagram.com/afrolingo.officiel" class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@afrolingo" class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z">
                            </path>
                        </svg>
                    </a>
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
                        <span class="text-xs font-baloo">Wouh di youah</span>
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
                        <span class="text-xs font-baloo">E kaaro</span>
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
                        <span class="text-xs font-baloo">Maakye</span>
                        <span class="text-[10px]">Twi</span>
                    </div>
                </div>
            </div>
            <div class="absolute left-8 sm:left-32 sm:bottom-10 bottom-4 flex w-full third-img"
                v-show="visible == true">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/congo.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-baloo">Mbote</span>
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
                        <span class="text-xs font-baloo">Indemin nawot</span>
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
                        <span class="text-xs font-baloo">Ba nun</span>
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
                        <span class="text-xs font-baloo">Dumela</span>
                        <span class="text-[10px]">Setswana</span>
                    </div>
                </div>
            </div>
            <div class="absolute left-8 sm:left-32 sm:bottom-10 bottom-4 flex w-full third-img"
                v-show="visible == false">
                <div class="flex justify-end items-center gap-2 px-2 pr-3 py-2 bg-white rounded-full"
                    style="box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.25);">
                    <div class="w-8 h-8 aspect-square rounded-full">
                        <img src="/senegal.png" class="w-full h-full object-cover rounded-full" alt="">
                    </div>
                    <div class="flex flex-col gap-y-0">
                        <span class="text-xs font-baloo">Salamalekum</span>
                        <span class="text-[10px]">Wolof</span>
                    </div>
                </div>
            </div>
            <NuxtImg src="/home.png" class="image" alt="" />
        </div>
    </header>
</template>

<style scoped>
header {
    height: calc(100vh - 60px);
}

.image {
    animation: appear 1.2s ease-in-out;
    width: 100%;
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

    .image {
        margin: 0 15%;
        width: 70%;
    }

}
</style>