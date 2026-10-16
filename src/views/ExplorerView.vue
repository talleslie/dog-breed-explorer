<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import BreedGrid from '../components/BreedGrid.vue'
import SearchBar from '../components/SearchBar.vue'
import { getAllBreeds, getRandomImage } from '../api/dogApi'
import type { Breed } from '@/types/dog'

const searchText = ref('')
const breedNames = ref<string[]>([])
const isLoading = ref(true)
const errorMessage = ref('')
const visibleCount = ref(10)
const imageUrls = ref<Record<string, string>>({})

const filteredNames = computed(() =>
    breedNames.value.filter((breedName) => breedName.includes(searchText.value.toLowerCase())),
)

const visibleNames = computed(() => filteredNames.value.slice(0, visibleCount.value))

const breeds = computed<Breed[]>(() =>
    visibleNames.value.map((breedName) => ({
        name: breedName,
        imageUrl: imageUrls.value[breedName] ?? '',
    })),
)
watch(visibleNames, (names) => {
    names.forEach(async (breedName) => {
        if (imageUrls.value[breedName]) return
        const response = await getRandomImage(breedName)
        imageUrls.value[breedName] = response.message
    })
})

onMounted(async () => {
    try {
        const response = await getAllBreeds()
        breedNames.value = Object.keys(response.message)
    } catch {
        errorMessage.value = "We couldn't load the breeds. Check your connection and refresh the page."
    } finally {
        isLoading.value = false
    }
})

const handleToggleFavourite = (breedName: string) => {
    console.log('Toggle favourite:', breedName)
}
</script>

<template>
    <main class="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <div>
            <h2 class="text-4xl font-bold">Find out more about different dog breeds</h2>
            <p class="mt-2 text-lg text-muted">
                Browse breeds, peek at photos, and save the ones that steal your heart.
            </p>
        </div>
        <SearchBar v-model="searchText" />

        <p v-if="isLoading">Loading breeds…</p>
        <p v-else-if="errorMessage" role="alert">{{ errorMessage }}</p>
        <template v-else>
            <BreedGrid :breeds="breeds" @toggle-favourite="handleToggleFavourite" />
            <button v-if="visibleCount < filteredNames.length" type="button"
                class="mx-auto rounded-full border border-ink/15 bg-white px-6 py-3 font-medium shadow-sm hover:bg-ink/5"
                @click="visibleCount += 10">
                Show more breeds
            </button>
        </template>
    </main>
</template>