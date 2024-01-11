<template>
    <OrganismMenu />
    <section class="px-5 sm:px-[15vw] py-14">
        <Nuxt-link to="/" class="mt-16 px-5 py-2 flex items-center max-w-[200px] gap-2 bg-[#f5f5f5] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                style="fill: rgba(0, 0, 0, 1);">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
            <span class="text-sm mt-1">
                {{ $t('back') }}
            </span>
        </Nuxt-link>
        <h1 class="mt-16 text-2xl font-bold">
            {{ $t('terms') }}
        </h1>
        <p class="mt-4 text-grisTxt text-justify">
            {{ $t('term_p') }}
        </p>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_one_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_one_p1') }}
            </p>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_one_p2') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_two_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_two_p1') }}
            </p>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_two_p2') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_three_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_three_p1') }}
            </p>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_three_p2') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_four_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_four_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_five_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_five_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_six_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_six_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_seven_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_seven_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_eight_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_eight_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('term_nine_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('term_nine_p1') }} {{ $t('term_nine_p2') }}

            </p>
        </div>
    </section>
    <SectionsFooter @openContact="showMail = true" />
    <OrganismGetEmail @close="showMail = false" v-if="showMail" />
</template>
<script>
export default {
    data() {
        return {
            showMail: false,
            title: `Conditions d'utilisation | Afrolingo`,
            description: `Découvrez les termes et conditions d'utilisation de l'application Afrolingo et ses services.`,
        }
    },

    head() {
        return {
            title: this.title,
            meta: [{
                hid: 'description',
                name: 'description',
                content: this.description
            }]
        }
    }
}
</script>