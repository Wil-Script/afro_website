<template>
    <div class="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-end sm:items-center"
        style="background: rgba(0, 0, 0, 0.5);">
        <div class="modal px-5 py-14 sm:p-10 flex flex-col rounded-t-lg rounde sm:rounded-lg bg-white w-full max-w-[550px]">
            <div class="mb-12 flex justify-between items-center w-full h-12">
                <NuxtImg src="/afrolingo-logo.png" class=" w-12" alt="flysoft logo" />
                <div class="flex justify-center items-center h-12 w-12 aspect-square rounded-full bg-[#f5f5f5] cursor-pointer"
                    @click="$emit('close')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                        <path
                            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                        </path>
                    </svg>
                </div>
            </div>
            <span class="font-bold text-xl">
                Entrez votre adresse email
            </span>
            <p>
                Faites partir des toutes premières personnes à avoir accès à l'application Afrolingo en toute exclusivité.
            </p>

            <input type="text" placeholder="example@gmail.com"
                class=" h-16 px-3 mt-9 rounded-full border border-[#e5e5e5] outline-none" v-model="email">
            <div class="w-full mt-12" @click="sendEmail()">
                <AtomsFullBtn libelle="Envoyer" :state="true" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: ""
        }
    },
    methods: {
        sendEmail() {
            if (!this.validateEmail(this.email)) {
                return alert("Entrez une adresse mail valide !")
            }
            this.emailSend = true
        },
        validateEmail(mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return (true)

        }
    }
}
</script>
<style scoped>
.modal {
    animation: appear 0.5s ease-in-out;
}

@keyframes appear {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>