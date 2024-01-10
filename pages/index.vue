<script>
export default {
    data() {
        return {
            showMail: false,
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