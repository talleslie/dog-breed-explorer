<!-- logic -->
<script setup lang="ts"></script>

<!-- html -->
<template>
    <header class="flex items-center justify-between border-b border-ink/10 px-8 py-4">
        <div class="flex items-center gap-3">
            <div
                class="flex size-11 items-center justify-center rounded-2xl bg-royal text-lg font-bold text-white shadow-md">
                D
            </div>
            <h1 class="text-xl font-semibold">Dog Breed Explorer</h1>
        </div>
        <nav class="flex gap-1 rounded-full bg-ink/5 p-1">
            <RouterLink :to="{ name: 'explorer' }"
                class="rounded-full px-5 py-2 text-muted aria-[current=page]:bg-white aria-[current=page]:text-ink aria-[current=page]:shadow-sm">
                Explorer</RouterLink>
            <RouterLink :to="{ name: 'my-pack' }"
                class="rounded-full px-5 py-2 text-muted aria-[current=page]:bg-white aria-[current=page]:text-ink aria-[current=page]:shadow-sm">
                My Pack</RouterLink>
        </nav>
    </header>
</template>

<!-- css -->
<style scoped></style>