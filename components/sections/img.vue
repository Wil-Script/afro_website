<template>
    <NuxtImg src="/afrolingo-card.png" class="img mt-40 hidden sm:inline-block" alt="flysoft logo" />
    <div class=" mb-40 w-full h-auto overflow-hidden border-b border-[#e5e5e5]">
        <div class="slider hidden sm:flex">
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismLang color="green" lang="Yoruba" />
                <OrganismLang color="orange" lang="Lingala" />
                <OrganismLang color="purple" lang="Wolof" />
                <OrganismLang color="green" lang="Bangou" />
                <OrganismLang color="orange" lang="Ewondo" />
                <OrganismLang color="purple" lang="Twi" />
                <OrganismLang color="green" lang="Fon" />
                <OrganismLang color="orange" lang="Haoussa" />
                <OrganismLang color="purple" lang="Swahili" />
                <OrganismLang color="green" lang="Amharic" />
                <OrganismLang color="orange" lang="Setswana" />
                <OrganismLang color="purple" lang="Kpelle" />
                <OrganismLang color="green" lang="Bangou" />
            </div>
            <div class="flex overflow-auto overflow-y-hidden mr-0">
                <OrganismLang color="green" lang="Yoruba" />
                <OrganismLang color="orange" lang="Lingala" />
                <OrganismLang color="purple" lang="Wolof" />
                <OrganismLang color="green" lang="Bangou" />
                <OrganismLang color="orange" lang="Ewondo" />
                <OrganismLang color="purple" lang="Twi" />
                <OrganismLang color="green" lang="Fon" />
                <OrganismLang color="orange" lang="Haoussa" />
                <OrganismLang color="purple" lang="Swahili" />
                <OrganismLang color="green" lang="Amharic" />
                <OrganismLang color="orange" lang="Setswana" />
                <OrganismLang color="purple" lang="Kpelle" />
                <OrganismLang color="green" lang="Bangou" />
            </div>

        </div>
    </div>
    <div class="mt-24 mb-5 px-5 grid gap-4 w-full h-auto sm:hidden">
        <div class="flex flex-col p-4 py-10 w-full h-auto rounded-lg bg-lightOrange">
            <span class="font-bold text-3xl">
                +15
            </span>
            <p>
                {{ $t('total') }}
            </p>
            <div class="mt-8 flex flex-wrap gap-1 w-full h-auto">
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Bangou</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Ewondo</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Lingala</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Yoruba</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Twi</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Wolof</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Swahili</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Kpelle</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Setswana</div>
                <div class="inline-block px-5 py-2 w-auto h-auto rounded-lg border border-white bg-white">Amharic</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.img {
    width: 100%;
}

.slider {
    align-items: center;
    height: 80px;
    width: 4992px;
    transform: translateX(0px);
    animation: 60s linear 0s infinite normal none running marqueeAnimation;
}

@keyframes marqueeAnimation {
    100% {
        transform: translateX(-2496px);
    }
}
</style>