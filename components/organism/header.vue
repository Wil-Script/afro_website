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
        class=" px-4 pt-8 flex flex-col gap-y-8 justify-between w-full bg-mainColor sm:pl-[7.5vw] sm:pb-4 sm:pt-4 sm:grid sm:grid-cols-2 sm:gap-12 sm:pr-4">
        <div class="flex flex-col gap-y-2 w-full h-auto sm:pt-10">
            <h1 class="font-bold text-3xl text-center text-[#2C1A09] sm:text-5xl sm:text-left">
                {{ $t('header_title') }}
            </h1>
            <p class=" text-center text-sm sm:text-xl sm:text-left sm:max-w-screen-sm sm:mt-4">
                {{ $t('header_p') }}
            </p>
            <!-- <div class="w-full sm:w-[270px] mt-10" @click="$emit('openContact')">
                <AtomsFullBtn :libelle="$t('waiting_list')" />
            </div> -->
            <div class="w-full sm:w-[270px] mt-10" @click="download()">
                <a href="/afrolingo-beta.apk" download="" target="_blank"
                    class="flex items-center justify-center w-full py-3 bg-white text-noir font-bold rounded-full">
                    {{ $t('download_beta') }}
                </a>
            </div>

            <div class="hidden sm:flex gap-2 mt-10">
                <NuxtImg src="/avatars.png" class="w-auto h-12" alt="" />
                <div class="flex flex-col">
                    <span class="text-sm">{{ $t('join_us') }}</span>
                    <span class="font-bold">+1500 {{ $t('persons') }}</span>
                </div>
            </div>
            <div class="hidden sm:flex w-auto max-w-60 h-auto items-center gap-4 mt-10">
                <div class="">
                    {{ $t('follow_us') }} :
                </div>
                <div class="flex w-auto h-auto gap-2">
                    <a href="https://www.instagram.com/afrolingo.officiel" class="flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                            <path
                                d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                                stroke="#141B34" stroke-width="1.5" />
                            <path d="M17.5078 6.5L17.4988 6.5" stroke="#141B34" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@afrolingo" class="flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                            <path
                                d="M10.3938 11.7779C10.8038 11.8365 11.1838 11.5517 11.2424 11.1416C11.3011 10.7316 11.0162 10.3517 10.6062 10.293L10.3938 11.7779ZM17.5 10.25C17.9142 10.25 18.25 9.91421 18.25 9.5C18.25 9.08579 17.9142 8.75 17.5 8.75V10.25ZM14.25 6C14.25 5.58579 13.9142 5.25 13.5 5.25C13.0858 5.25 12.75 5.58579 12.75 6H14.25ZM12.75 14.5C12.75 16.0188 11.5188 17.25 10 17.25V18.75C12.3472 18.75 14.25 16.8472 14.25 14.5H12.75ZM10 17.25C8.48122 17.25 7.25 16.0188 7.25 14.5H5.75C5.75 16.8472 7.65279 18.75 10 18.75V17.25ZM7.25 14.5C7.25 12.9812 8.48122 11.75 10 11.75V10.25C7.65279 10.25 5.75 12.1528 5.75 14.5H7.25ZM10 11.75C10.1341 11.75 10.2656 11.7595 10.3938 11.7779L10.6062 10.293C10.4078 10.2646 10.2054 10.25 10 10.25V11.75ZM17.5 8.75C16.7254 8.75 15.8924 8.4308 15.2559 7.89923C14.62 7.36819 14.25 6.68835 14.25 6H12.75C12.75 7.24465 13.4135 8.31481 14.2944 9.05052C15.1746 9.7857 16.3416 10.25 17.5 10.25V8.75ZM12.75 6V14.5H14.25V6H12.75Z"
                                fill="#141B34" />
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
            <div class="absolute left-8 sm:left-32 sm:bottom-10 bottom-4 flex w-full third-img"
                v-show="visible == true">
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
            <div class="absolute left-8 sm:left-32 sm:bottom-10 bottom-4 flex w-full third-img"
                v-show="visible == false">
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