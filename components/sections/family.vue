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
}
</script>

<template>
    <section
        class="mt-[90px] px-5 py-14 grid gap-5 w-full h-auto bg-[#F9F8F8] sm:px-[10vw] sm:grid-cols-10 sm:py-24 sm:my-40">
        <div class="flex flex-col w-full h-auto sm:col-start-1 sm:col-end-4 sm:grid sm:grid-rows-2 gap-5 sm:h-full">
            <div class="hidden sm:flex sm:flex-col sm:w-full sm:h-full bg-white rounded-lg p-5">
                <div class="flex w-full h-auto">
                    <div class=" bg-mainGreen text-lg font-baloo text-white px-5 py-2 rounded-full">
                        {{ $t('imagine') }}
                    </div>
                </div>
                <p class="mt-4">
                    {{ $t('unlock') }}
                </p>
            </div>
            <div class="w-full h-auto sm:h-full">
                <NuxtImg src="/daddy.png" class="w-full sm:h-full sm:object-cover rounded-lg" alt="" />
            </div>
        </div>
        <div class="px-5 py-8 w-full h-auto bg-white rounded-lg sm:col-start-4 sm:col-end-9 sm:pb-32 sm:py-10 sm:px-10">
            <div class="flex flex-col w-full h-auto gap-1">
                <span class="font-baloo sm:text-xl">
                    {{ $t('forAll') }}
                </span>
                <p class=" text-grisTxt">
                    {{ $t('forAll_p') }}
                </p>
            </div>
            <div class="mt-5 p-4 rounded-[18px] flex flex-col w-full gap-1 border border-[#e5e5e5]">
                <span class="font-baloo sm:text-lg">{{ $t('child_title') }}</span>
                <p class=" text-grisTxt sm:text-base">
                    {{ $t('child_p') }}
                </p>
            </div>
            <div class="mt-2 p-4 rounded-[18px] flex flex-col w-full gap-1 border border-[#e5e5e5]">
                <span class="font-baloo sm:text-lg">{{ $t('adult_title') }}</span>
                <p class=" text-grisTxt sm:text-base">
                    {{ $t('adult_p') }}
                </p>
            </div>

            <div class="mt-8 flex flex-wrap gap-1 sm:mt-14">
                <div class="flex flex-col gap-2 w-full">
                    <a href="https://play.google.com/store/apps/details?id=afrolingo.com.afrolingo&gl=FR"
                        target="_blank"
                        class="flex gap-2 items-center justify-center w-full py-3 bg-white font-baloo rounded-full border border-noir">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M239.82,114.18,72,18.16a16,16,0,0,0-16.12,0A15.68,15.68,0,0,0,48,31.87V224.13a15.68,15.68,0,0,0,7.92,13.67,16,16,0,0,0,16.12,0l167.78-96a15.76,15.76,0,0,0,0-27.64ZM160,139.31l18.92,18.92-88.5,50.66ZM90.4,47.1l88.53,50.67L160,116.69ZM193.31,150l-22-22,22-22,38.43,22Z">
                            </path>
                        </svg>
                        {{ $t('download_play') }}
                    </a>
                    <a href="#"
                        class="flex gap-2 items-center justify-center w-full py-3 bg-white font-baloo rounded-full border border-noir cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4ZM223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Z">
                            </path>
                        </svg>
                        {{ $t('download_ios') }}
                    </a>
                    <span class="text-sm md:text-xs"> *{{ $t('soon') }}</span>
                </div>
            </div>
        </div>
        <div class="w-full h-auto sm:col-start-9 sm:col-end-11 sm:grid sm:grid-rows-2 gap-5 sm:h-full">
            <div class="hidden sm:flex w-full h-full bg-white rounded-lg">
                <NuxtImg src="/woman.jpg" class="w-full h-full object-cover rounded-lg" alt="" />
            </div>
            <div class="w-full h-auto sm:h-full">
                <NuxtImg src="/fam.png" class="w-full sm:h-full sm:object-cover rounded-lg" alt="" />
            </div>
        </div>
    </section>
</template>