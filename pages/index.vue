<script>
export default {
    data() {
        return {
            showMail: false,
            title: `Afrolingo | Apprendre les langues africaines`,
            description: `Apprenez à parler une langue africaine en peu de temps. Avec Afrolingo, l'apprentissage de ces langues n'a jamais été aussi accessible et facile !`,
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