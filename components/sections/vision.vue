<script>

</script>
<template>
    <section class=" mt-12 gap-y-4 flex flex-col w-full h-auto sm:px-[10vw] sm:mt-28">
        <div class=" px-5">
            <span class="font-bold text-2xl">
                Afrolingo, c'est plus qu'une simple application linguistique.
            </span>
            <div>

            </div>
        </div>
        <div class="pl-5 overflow-auto whitespace-nowrap w-full sm:grid sm:grid-cols-3 sm:overflow-hidden sm:whitespace-normal sm:gap-4
        ">
            <OrganismVisionCard type="culture" title="Découvrir la culture d'un peuple à travers sa langue"
                desc="L'apprentissage d'une langue est un voyage vers une nouvelle culture. En chemin, vous rencontrerez des gens, découvrirez des traditions et ferez des expériences qui vous changeront à jamais." />
            <OrganismVisionCard type="rich" title="Promouvoir la richesse et la diversité des langues africaines"
                desc="Au-delà des frontières géographiques, l'Afrique abrite une multitude de langues vibrant d'histoires, de traditions et de sons uniques. Avec Afrolingo, l'apprentissage de ces langues n'a jamais été aussi accessible !" />
            <OrganismVisionCard type="comm"
                title="Rassembler une communauté qui souhaite découvrir l'Afrique et sa diversité."
                desc="L'Afrique est un continent riche et diversifié, avec une histoire et une culture fascinantes. Il existe de nombreuses façons de découvrir l'Afrique, mais le meilleur moyen est de le faire en compagnie d'autres personnes partageant la même passion." />
        </div>
        <div class="px-5 w-full h-auto mt-5 sm:hidden" @click="$emit('openContact')">
            <AtomsOutlinedBtn libelle="Join the queue" />
        </div>
    </section>
</template>
<style scoped></style>