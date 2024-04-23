<template>
    <NuxtImg src="/afrolingo-card.png" class="img mt-40 hidden sm:inline-block" alt="flysoft logo" />
    <div class="mb-40 w-auto h-auto overflow-hidden border-b border-[#e5e5e5] hidden sm:flex">
        <div class="slider flex">
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
    <div class=" mt-12 md:mt-0 mb-5 px-5 grid gap-4 w-full h-auto sm:hidden">
        <!-- <div class=" my-10 flex flex-col sm:hidden w-full h-auto items-center gap-4 mt-10">
            <div class="">
                {{ $t('follow_us') }}
            </div>
            <div class="flex w-full h-auto gap-2">
                <a href="https://www.instagram.com/afrolingo.officiel"
                    class="flex w-full items-center justify-center gap-x-1">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                        <path
                            d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                            stroke="#141B34" stroke-width="1.5" />
                        <path d="M17.5078 6.5L17.4988 6.5" stroke="#141B34" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <span>
                        Instagram
                    </span>
                </a>
                <a href="https://www.tiktok.com/@afrolingo" class="flex w-full items-center justify-center gap-x-1">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                            stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                        <path
                            d="M10.3938 11.7779C10.8038 11.8365 11.1838 11.5517 11.2424 11.1416C11.3011 10.7316 11.0162 10.3517 10.6062 10.293L10.3938 11.7779ZM17.5 10.25C17.9142 10.25 18.25 9.91421 18.25 9.5C18.25 9.08579 17.9142 8.75 17.5 8.75V10.25ZM14.25 6C14.25 5.58579 13.9142 5.25 13.5 5.25C13.0858 5.25 12.75 5.58579 12.75 6H14.25ZM12.75 14.5C12.75 16.0188 11.5188 17.25 10 17.25V18.75C12.3472 18.75 14.25 16.8472 14.25 14.5H12.75ZM10 17.25C8.48122 17.25 7.25 16.0188 7.25 14.5H5.75C5.75 16.8472 7.65279 18.75 10 18.75V17.25ZM7.25 14.5C7.25 12.9812 8.48122 11.75 10 11.75V10.25C7.65279 10.25 5.75 12.1528 5.75 14.5H7.25ZM10 11.75C10.1341 11.75 10.2656 11.7595 10.3938 11.7779L10.6062 10.293C10.4078 10.2646 10.2054 10.25 10 10.25V11.75ZM17.5 8.75C16.7254 8.75 15.8924 8.4308 15.2559 7.89923C14.62 7.36819 14.25 6.68835 14.25 6H12.75C12.75 7.24465 13.4135 8.31481 14.2944 9.05052C15.1746 9.7857 16.3416 10.25 17.5 10.25V8.75ZM12.75 6V14.5H14.25V6H12.75Z"
                            fill="#141B34" />
                    </svg>
                    <span>
                        Tiktok
                    </span>
                </a>
            </div>
        </div> -->
        <div class="flex flex-col p-4 py-10 w-full h-auto rounded-lg bg-lightOrange">
            <span class="font-baloo text-3xl">
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