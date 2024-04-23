<script>
export default {
    data() {
        return {
            showMail: false,}
    },

    setup() {
        const title = "Afrolingo | Apprendre les langues africaines"
        useHead({
            title,
            meta: [
                {
                    name: 'description',
                    content: `Apprenez à parler une langue africaine en peu de temps. Avec Afrolingo, l'apprentissage de ces langues n'a jamais été aussi accessible et facile !`
                },
                {
                    hid: 'og-desc',
                    property: 'og:description',
                    content: `Apprenez à parler une langue africaine en peu de temps. Avec Afrolingo, l'apprentissage de ces langues n'a jamais été aussi accessible et facile !`
                },
                {
                    hid: 'og-type',
                    property: 'og:type',
                    content: `website`
                },
                {
                    hid: 'og-image',
                    property: 'og:image',
                    content: `/cover.jpg`
                },
                {
                    hid: 't-image',
                    property: 'twitter:image',
                    content: `/cover.jpg`
                },
            ]
        })
    },
}
</script>
<template>
    <OrganismMenu />
    <OrganismHeader @openContact="showMail = true" />
    <SectionsVision @openContact="showMail = true" />
    <SectionsImg />
    <SectionsFeatures />
    <SectionsFamily @openContact="showMail = true" />
    <SectionsPartner />
    <SectionsContact />
    <SectionsFooter @openContact="showMail = true" />
    <OrganismGetEmail @close="showMail = false" v-if="showMail" />
</template>
<style scoped></style>