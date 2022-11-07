<template>
  <section class="min-h-[364px] py-3">
    <div
      class="container mx-auto lg:flex gap-4 justify-center items-stretch max-lg:p-3"
    >
      <div v-if="loading" class="self-center">
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
    </div>
  </section>
</template>

<script setup lang="ts">
const { result, loading } = usePostsPreview()
</script>
