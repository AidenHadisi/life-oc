<template>
  <span class="loader" />
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 6px solid;
  border-color: #9b8c79 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
