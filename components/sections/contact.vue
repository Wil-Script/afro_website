<template>
    <section id="contact" class="mt-[90px] px-5 w-full sm:px-[10vw] grid gap-16 sm:grid-cols-2">
        <div class=" pt-20 flex flex-col w-full h-auto">
            <span class="text-2xl font-baloo">
                {{ $t('question') }}
            </span>
            <p class="">
                {{ $t('question_p') }}
            </p>
            <div class="mt-5 w-full h-auto flex flex-col gap-2">
                <a href="https://t.me/afrolingo"
                    class="p-1 h-16 w-full flex gap-3 border border-[#e5e5e5] rounded-full">
                    <div class="h-full aspect-square rounded-full flex justify-center items-center bg-[#f5f5f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19ZM175.53,208,92.85,135.5l119-85.29Z">
                            </path>
                        </svg>
                    </div>
                    <div class="flex flex-col h-full justify-center">
                        <span class="font-baloo">Telegram</span>
                        <p class="text-[10px] text-grisTxt text-sm">{{ $t('telegram_desc') }}</p>
                    </div>
                </a>
                <a href="https://twitter.com/AfroLingo_"
                    class="p-1 h-16 w-full flex gap-3 border border-[#e5e5e5] rounded-full">
                    <div class="h-full aspect-square rounded-full flex justify-center items-center bg-[#f5f5f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z">
                            </path>
                        </svg>
                    </div>
                    <div class="flex flex-col h-full justify-center">
                        <span class="font-baloo">Twitter</span>
                        <p class="text-[10px] text-grisTxt text-sm">{{ $t('telegram_desc') }}</p>
                    </div>
                </a>
                <a href="mailto:philippejacques@afrolingo.org"
                    class="p-1 h-16 w-full flex gap-3 border border-[#e5e5e5] rounded-full">
                    <div class="h-full aspect-square rounded-full flex justify-center items-center bg-[#f5f5f5]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z">
                            </path>
                        </svg>
                    </div>
                    <div class="flex flex-col h-full justify-center">
                        <span class="font-baloo">Email</span>
                        <p class="text-[10px] text-grisTxt text-sm">{{ $t('telegram_desc') }}</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="hidden sm:flex sm:w-full sm:aspect-square bg-slate-200 rounded-lg">
            <NuxtImg src="/contact.png" class="w-full h-full object-cover rounded-lg" alt="" />
        </div>
    </section>
</template>