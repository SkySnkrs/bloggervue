<script setup>
import { AppState } from '@/AppState';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)
</script>


<template>
    <div></div>
</template>


<style lang="scss" scoped></style>