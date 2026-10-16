<script setup lang="ts">
const searchText = defineModel<string>({ required: true })

import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="relative">
        <MagnifyingGlassIcon class="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-muted" />
        <input v-model="searchText" type="search" placeholder="Search breeds, e.g. Beagle" aria-label="Search breeds"
            class="w-full rounded-full border border-ink/10 bg-white py-3.5 pr-5 pl-12 shadow-sm outline-none placeholder:text-muted focus:border-royal focus:ring-4 focus:ring-royal/15" />
    </div>
</template>