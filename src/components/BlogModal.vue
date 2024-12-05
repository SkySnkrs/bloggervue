<script setup>
import { AppState } from '@/AppState';
import { computed, ref, watch } from 'vue';


const blog = computed(() => AppState.activeBlog)
const profileLoaded = ref(false)

watch(blog, (newb, oldb) => {
    if (newb?.creator.id != oldb?.creator.id) {
        profileLoaded.value = false
    }
})

</script>


<template>
    <div class="container-fluid">
        <div class="modal" tabindex="-1" id="projectModal" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div v-if="blog != null" class="modal-content">
                    <div class="modal-header d-flex justify-content-between">
                        <div class="col-md-3 d-block">
                            <div class="text-center profile-Border">
                                <img @load="profileLoaded = true" :src="blog?.creator.picture" alt=""
                                    class="profile-Image" :class="{ showImage: profileLoaded }">
                            </div>
                            <div class="text-center row creatorText mt-2 d-flex justify-content-center">
                                <p class="col-md-5 text-end">Posted By:</p>
                                <p class="col-md-5 text-start">{{ blog.creator.name }}</p>
                            </div>
                        </div>
                        <div class="text-center col-md-4">
                            <h5 class="modal-title">{{ blog?.title }}</h5>
                        </div>
                        <div class="col-md-3 text-end">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex justify-content-center align-content-center">
                        </div>
                        <div class="text-start">
                            <p>{{ blog?.body }}</p>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <div class="d-flex justify-content-between">
                            <p class="m-2">Last Updated: {{ blog?.LastUpdated }}</p>
                            <p class="m-2">Created: {{ blog?.FullDate }}</p>
                        </div>
                        <div class="text-end">
                            <button type="button" class="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary m-2">Save changes</button>
                        </div>
                    </div>
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
    opacity: 0;
}

.showImage {
    opacity: 1;
    transition: opacity .2s linear;
}

.creatorText {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.creatorSection {
    padding: 1em;
    margin: 0.5em;
}
</style>