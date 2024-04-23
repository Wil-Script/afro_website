<template>
    <section class="px-5 mt-[90px] w-full h-auto sm:px-[10vw] sm:my-40">
        <span class="text-2xl font-baloo">
            {{ $t('partner_support') }}
        </span>
        <div class="grid mt-2 gap-2 sm:grid-cols-2 sm:gap-10 sm:mt-6">
            <OrganismPatnerCard />
            <OrganismPayCard />
        </div>
    </section>
</template>