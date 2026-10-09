<script setup lang="ts">
defineProps<{
    name: string
    imageUrl: string
}>()
const emit = defineEmits<{
    toggleFavourite: []
}>()
import { HeartIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="relative overflow-hidden rounded-3xl bg-white shadow-md">
        <img :src="imageUrl" :alt="name" class="aspect-4/3 w-full object-cover" />
        <button type="button" :aria-label="`Add ${name} to My Pack`"
            class="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/80 shadow-sm"
            @click="emit('toggleFavourite')">
            <HeartIcon class="size-5 text-muted" />
        </button>
        <p class="px-5 py-4 font-semibold"> {{ name }}</p>
    </div>
</template>