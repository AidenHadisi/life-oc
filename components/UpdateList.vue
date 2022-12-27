<template>
  <section class="relative min-h-[500px] py-3">
    <div>
      <div v-if="loading" class="self-center flex justify-center mt-3">
        <TheSpinner />
      </div>
      <div class="container relative mx-auto lg:flex gap-4 justify-center items-stretch max-lg:p-3 z-10">
        <UpdateItem
          v-for="post of result?.posts.nodes"
          :key="post.date"
          class="flex-1"
          :title="post.title"
          :date="post.date"
          :image-url="post.featuredImage.node.mediaItemUrl"
          :content="post.content"
          :author="post.author.node.name"
        />
      </div>
    </div>
    <svg class="absolute bottom-[-1px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#633128"
        fill-opacity="1"
        d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,106.7C672,139,768,181,864,181.3C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </section>
</template>

<script setup lang="ts">
const { result, loading } = usePostsPreview()
</script>
