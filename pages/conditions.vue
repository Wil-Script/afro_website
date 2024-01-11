<template>
    <OrganismMenu />
    <section class="px-5 sm:px-[15vw] py-14">
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
                {{ $t('term_nine_p') }}
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