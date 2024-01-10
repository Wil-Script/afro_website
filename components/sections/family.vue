<template>
    <section
        class="mt-[90px] px-5 py-14 grid gap-5 w-full h-auto bg-[#F9F8F8] sm:px-[10vw] sm:grid-cols-10 sm:py-24 sm:my-40">
        <div class="flex flex-col w-full h-auto sm:col-start-1 sm:col-end-4 sm:grid sm:grid-rows-2 gap-5 sm:h-full">
            <div class="hidden sm:flex sm:flex-col sm:w-full sm:h-full bg-white rounded-lg p-5">
                <div class="flex w-full h-auto">
                    <div class=" bg-mainGreen text-lg font-bold text-white font-bol px-5 py-2 rounded-full">
                        Imaginez
                    </div>
                </div>
                <p class="mt-4">
                    Déverrouiller le <b class=" text-mainPurple">Swahili</b> et vous promener dans les marchés
                    animés de <b class=" text-mainGreen">Zanzibar</b>, ou bien
                    maîtriser le <b class=" text-mainColor">Wolof</b> et partager un thé parfumé avec une <b
                        class=" text-mainPurple">famille sénégalaise</b>. Chaque langue est une passerelle vers une culture
                    riche et vibrante, prête à être explorée.
                </p>
            </div>
            <div class="w-full h-auto sm:h-full">
                <NuxtImg src="/daddy.png" class="w-full sm:h-full sm:object-cover rounded-lg" alt="" />
            </div>
        </div>
        <div class="px-5 py-8 w-full h-auto bg-white rounded-lg sm:col-start-4 sm:col-end-9 sm:pb-32 sm:py-10 sm:px-10">
            <div class="flex flex-col w-full h-auto gap-1">
                <span class="font-bold sm:text-xl">
                    Adapté à tous.
                </span>
                <p class=" text-grisTxt text-sm sm:text-base">
                    Afrolingo est une application qui s'adapte à tous les types de profils, des plus jeunes aux plus âgés.
                </p>
            </div>
            <div class="mt-5 p-4 rounded-[18px] flex flex-col w-full gap-1 border border-[#e5e5e5]">
                <span class="font-bold sm:text-lg">Enfants et adolescents</span>
                <p class="text-sm text-grisTxt sm:text-base">
                    Application conviviale qui simplifie l'apprentissage, même pour les plus jeunes.
                </p>
            </div>
            <div class="mt-2 p-4 rounded-[18px] flex flex-col w-full gap-1 border border-[#e5e5e5]">
                <span class="font-bold sm:text-lg">Adultes</span>
                <p class="text-sm text-grisTxt sm:text-base">
                    Du contenu de qualité et consistent pour vous permettre d'apprendre même les notions les plus avancées.
                </p>
            </div>

            <div class="mt-8 flex gap-1 sm:mt-14">
                <div class=" w-2/3" @click="$emit('openContact')">
                    <AtomsOutlinedBtn libelle="Rejoindre la file d'attente" />
                </div>
                <div class="flex gap-1 w-1/3">
                    <a href="https://www.instagram.com/afrolingo.officiel"
                        class="flex items-center justify-center w-12 h-12 rounded-lg border border-noir">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                            <path
                                d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                                stroke="#141B34" stroke-width="1.5" />
                            <path d="M17.5078 6.5L17.4988 6.5" stroke="#141B34" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@afrolingo"
                        class="flex items-center justify-center w-12 h-12 rounded-lg border border-noir">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                            <path
                                d="M10.3938 11.7779C10.8038 11.8365 11.1838 11.5517 11.2424 11.1416C11.3011 10.7316 11.0162 10.3517 10.6062 10.293L10.3938 11.7779ZM17.5 10.25C17.9142 10.25 18.25 9.91421 18.25 9.5C18.25 9.08579 17.9142 8.75 17.5 8.75V10.25ZM14.25 6C14.25 5.58579 13.9142 5.25 13.5 5.25C13.0858 5.25 12.75 5.58579 12.75 6H14.25ZM12.75 14.5C12.75 16.0188 11.5188 17.25 10 17.25V18.75C12.3472 18.75 14.25 16.8472 14.25 14.5H12.75ZM10 17.25C8.48122 17.25 7.25 16.0188 7.25 14.5H5.75C5.75 16.8472 7.65279 18.75 10 18.75V17.25ZM7.25 14.5C7.25 12.9812 8.48122 11.75 10 11.75V10.25C7.65279 10.25 5.75 12.1528 5.75 14.5H7.25ZM10 11.75C10.1341 11.75 10.2656 11.7595 10.3938 11.7779L10.6062 10.293C10.4078 10.2646 10.2054 10.25 10 10.25V11.75ZM17.5 8.75C16.7254 8.75 15.8924 8.4308 15.2559 7.89923C14.62 7.36819 14.25 6.68835 14.25 6H12.75C12.75 7.24465 13.4135 8.31481 14.2944 9.05052C15.1746 9.7857 16.3416 10.25 17.5 10.25V8.75ZM12.75 6V14.5H14.25V6H12.75Z"
                                fill="#141B34" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="w-full h-auto sm:col-start-9 sm:col-end-11 sm:grid sm:grid-rows-2 gap-5 sm:h-full">
            <div class="hidden sm:flex w-full h-full bg-white rounded-lg">
                <NuxtImg src="/woman.jpg" class="w-full h-full object-cover rounded-lg" alt="" />
            </div>
            <div class="w-full h-auto sm:h-full">
                <NuxtImg src="/fam.png" class="w-full sm:h-full sm:object-cover rounded-lg" alt="" />
            </div>
        </div>
    </section>
</template>