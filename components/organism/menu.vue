<template>
    <div class="px-5 w-full h-[60px] sm:h-[80px] sm:px-[10vw]" id="home">
        <div class="flex justify-between items-center h-full w-full sm:hidden">
            <Nuxt-link to="/">
                <NuxtImg src="/afrolingo-logo.png" class="h-10" alt="afrolingo logo" />
            </Nuxt-link>
            <Nuxt-link to="/">
                <NuxtImg src="/afrolingo-text.png" class="h-5" alt="afrolingo logo" />
            </Nuxt-link>

            <div class=" flex items-center gap-2">
                <button @click="oneButton()"
                    class=" flex gap-2 items-center border border-[#e5e5e5] p-2 rounded-[30px]">
                    <img src="@/public/lang3.png" class=" w-8" alt="">
                </button>
            </div>
        </div>
        <div class="hidden justify-between items-center h-full w-full sm:flex">
            <Nuxt-link to="/">
                <NuxtImg src="/afrolingo-logo-full.png" class="h-10" alt="afrolingo logo" />
            </Nuxt-link>
            <nav class="flex gap-4">
                <Nuxt-link to="/#home" class="text-sm">
                    {{ $t('home') }}
                </Nuxt-link>
                <Nuxt-link to="/#features" class="text-sm">
                    {{ $t('feature') }}
                </Nuxt-link>
                <Nuxt-link to="/#contact" class="text-sm">
                    {{ $t('contact') }}
                </Nuxt-link>
            </nav>
            <div class=" flex items-center gap-0">
                <div class="w-[180px]" @click="$emit('openContact')">
                    <Nuxt-link to="/#contact"
                        class="flex items-center justify-center w-full py-3 bg-noir text-white font-baloo rounded-full">
                        {{ $t('contact_us') }}
                    </Nuxt-link>
                </div>
                <button @click="oneButton()" title="Traduire en français"
                    class=" ml-2 flex gap-2 items-center h-12 border border-noir p-2 px-5 rounded-[30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#000000" viewBox="0 0 256 256">
                        <path
                            d="M250.73,210.63l-56-112a12,12,0,0,0-21.46,0l-20.52,41A84.2,84.2,0,0,1,114,126.22,107.48,107.48,0,0,0,139.33,68H160a12,12,0,0,0,0-24H108V32a12,12,0,0,0-24,0V44H32a12,12,0,0,0,0,24h83.13A83.69,83.69,0,0,1,96,110.35,84,84,0,0,1,83.6,91a12,12,0,1,0-21.81,10A107.55,107.55,0,0,0,78,126.24,83.54,83.54,0,0,1,32,140a12,12,0,0,0,0,24,107.47,107.47,0,0,0,64-21.07,108.4,108.4,0,0,0,45.39,19.44l-24.13,48.26a12,12,0,1,0,21.46,10.73L151.41,196h65.17l12.68,25.36a12,12,0,1,0,21.47-10.73ZM163.41,172,184,130.83,204.58,172Z">
                        </path>
                    </svg>
                    <span class=" font-baloo">
                        {{ $t('trans') }}
                    </span>
                </button>

            </div>
        </div>
    </div>
</template>
<script>

export default {
    setup() {
        const { locale, setLocale } = useI18n()
        return {
            locale, setLocale
        }
    },
    data() {
        return {
            act: false,
        }
    },
    methods: {
        toFrench() {
            this.setLocale('fr')
        },
        toEnglish() {
            this.setLocale('en')
        },
        oneButton() {
            this.act = !this.act;
            if (this.act) {
                this.toFrench()
            } else {
                this.toEnglish()
            }
        }
    }
}
</script>