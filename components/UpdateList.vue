<template>
  <section
    class="min-h-[364px] py-3 container mx-auto flex gap-3 justify-center items-center"
  >
    <div v-if="loading">
      <TheSpinner />
    </div>
    <template v-else>
      <UpdateItem
        v-for="post of result?.posts.nodes"
        :key="post.date"
        :title="post.title"
        :date="post.date"
        :image-url="post.featuredImage.node.mediaItemUrl"
        :content="post.content"
        :author="post.author.node.name"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
const { result, loading } = usePostsPreview()
</script>
