<script setup>
import { AppState } from '@/AppState';
import { computed } from 'vue';


const blog = computed(() => AppState.activeBlog)
</script>


<template>
    <div class="modal" tabindex="-1" id="projectModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ blog?.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex justify-content-center align-content-center">
                        <div class="creatorSection">
                            <div class="text-center profile-Border">
                                <img :src="blog?.creator.picture" alt="" class="profile-Image">
                            </div>
                            <div class="text-center creatorText mt-2 d-flex">
                                <p>Posted By:</p>
                                <p class="mx-2">{{ blog.creator.name }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-start">
                        <p>{{ blog?.body }}</p>
                    </div>
                    <div class="creator d-flex justify-content-between">
                        <p class="text-start">Last Updated: {{ blog?.LastUpdated }}</p>
                        <p class="text-end">Created: {{ blog?.FullDate }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.profile-Image {
    height: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.creator {
    border-bottom: 1px solid black;
}

.creatorText {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.creatorSection {
    padding: 1em;
    margin: 0.5em;
}
</style>