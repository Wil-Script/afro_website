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
                <button @click="oneButton()" class=" flex gap-2 items-center border border-[#e5e5e5] p-2 rounded-[30px]">
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
                        class="flex items-center justify-center w-full py-3 bg-noir text-white font-bold rounded-full">
                        {{ $t('contact_us') }}
                    </Nuxt-link>
                </div>
                <div class=" ml-4 flex items-center gap-2">
                    <button @click="toFrench()" title="Traduire en français"
                        class=" flex gap-2 items-center border border-[#e5e5e5] p-2 rounded-[30px]">
                        <img src="@/public/fr.png" class=" w-8" alt="">
                    </button>
                    <button @click="toEnglish()" title="Translate in English"
                        class=" flex gap-2 items-center border border-[#e5e5e5] p-2 rounded-[30px]">
                        <img src="@/public/en.png" class=" w-8" alt="">
                    </button>
                </div>

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