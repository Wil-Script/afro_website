<template>
    <OrganismMenu />
    <section class="px-5 sm:px-[15vw] py-14">
        <Nuxt-link to="/" class="mt-8 px-5 py-2 flex items-center max-w-[200px] gap-2 bg-[#f5f5f5] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                style="fill: rgba(0, 0, 0, 1);">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
            </svg>
            <span class="text-sm mt-1">
                {{ $t('back') }}
            </span>
        </Nuxt-link>
        <h1 class="mt-16 text-2xl font-bold">
            {{ $t('privacy') }}
        </h1>
        <p class="mt-4 text-grisTxt text-justify">
            {{ $t('privacy_p') }}
        </p>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_one_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_one_p1') }}
            </p>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_one_p2') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_two_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_two_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_three_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_three_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_four_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_four_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_five_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_five_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_six_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_six_p') }}
            </p>
        </div>
        <div class="mt-12 flex flex-col gap-y-2">
            <span class="font-bold">{{ $t('privacy_seven_title') }}</span>
            <p class=" text-grisTxt text-justify">
                {{ $t('privacy_seven_p1') }} {{ $t('privacy_seven_p2') }}
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
            title: `Confidentialité | Afrolingo`,
            description: `Découvrez les privacyes de confidentialité de l'application Afrolingo et ses services.`,
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