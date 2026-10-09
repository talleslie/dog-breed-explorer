<script setup lang="ts">
import type { Breed } from '@/types/dog'
import BreedCard from './BreedCard.vue'

defineProps<{
    breeds: Breed[]
}>()

const emit = defineEmits<{
    toggleFavourite: [breedName: string]
}>()
</script>

<template>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        <BreedCard v-for="breed in breeds" :key="breed.name" :name="breed.name" :image-url="breed.imageUrl"
            @toggleFavourite="emit('toggleFavourite', breed.name)" />
    </div>
</template>