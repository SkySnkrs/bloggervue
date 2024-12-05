<script setup>
import { Blog } from '@/models/Blog';
import { blogsService } from '@/services/BlogsService';


defineProps({
    blogsProp: { type: Blog, required: true }
})

function setActiveBlog(blog) {
    blogsService.setActiveBlog(blog)
}
</script>


<template>
    <div @click="setActiveBlog(blogsProp)" class="blogBorder" selectable type="button" data-bs-toggle="modal"
        data-bs-target="#projectModal">
        <h4>{{ blogsProp.title }}</h4>
        <div class="blogImage">
            <img v-if="blogsProp.imageUrl" :src="blogsProp.imageUrl" alt="">
            <p v-else>User Does Not Have Image For Blog</p>
        </div>
        <div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.blogBorder {
    padding: 1em;
    color: black;
    border: 1px solid black;
    box-shadow: 1px 1px 3px black;
    border-radius: 8px;
    min-height: 50dvh;
}

.blogBorder h4 {
    border-bottom: 1px solid black;
    min-height: 7dvh;
}

.blogBorder img {
    height: 15rem;
    width: 20rem;
    object-fit: cover;
    object-position: center;
    display: flex;
    justify-self: center;
    user-select: none;
    -webkit-user-drag: none;
    padding: 0.3em;
}
</style>