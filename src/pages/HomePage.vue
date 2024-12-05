<script setup>
import BlogSection from '@/components/BlogSection.vue';
import { AppState } from '@/AppState';
import { blogsService } from '@/services/BlogsService';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})

async function getBlogs() {
  try {
    await blogsService.getBlogs()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>

<template>
  <section class="container-fluid">
    <h2 class="mt-3">Blogs:</h2>
    <div class="row">
      <div v-for="blog in blogs" v-bind:key="blog.id" class="col-md-4 mt-3">
        <BlogSection :blogsProp="blog" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
