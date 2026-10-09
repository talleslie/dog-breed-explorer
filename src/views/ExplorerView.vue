<script setup lang="ts">
import BreedGrid from '../components/BreedGrid.vue'
import type { Breed } from '@/types/dog'

const sampleBreeds: Breed[] = [
    { name: 'Akita', imageUrl: 'https://images.dog.ceo/breeds/akita/an_akita_inu_resting.jpg' },
    { name: 'Beagle', imageUrl: 'https://images.dog.ceo/breeds/beagle/n02088364_13627.jpg' },
    { name: 'Dalmatian', imageUrl: 'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg' },
    { name: 'Pug', imageUrl: 'https://images.dog.ceo/breeds/pug/n02110958_16492.jpg' },
    { name: 'Corgi', imageUrl: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_50.jpg' },
]
const handleToggleFavourite = (breedName: string) => {
    console.log('Toggled favourite:', breedName)
}
</script>

<template>
    <main class="mx-auto max-w-6xl px-6 py-10">
        <BreedGrid :breeds="sampleBreeds" @toggleFavourite="handleToggleFavourite" />
    </main>
</template>