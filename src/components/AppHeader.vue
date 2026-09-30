<!-- logic -->
<script setup lang="ts"></script>

<!-- html -->
<template>
    <header>
        <div>D</div>
        <h1>Dog Breed Explorer</h1>
        <nav>
            <RouterLink :to="{ name: 'explorer' }">Explorer</RouterLink>
            <RouterLink :to="{ name: 'my-pack' }">My Pack</RouterLink>
        </nav>
    </header>
</template>

<!-- css -->
<style scoped></style>