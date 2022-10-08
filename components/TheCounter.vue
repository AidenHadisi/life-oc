<template>
  <div class="mb-4 text-indigo-500 text-3xl lg:text-8xl">
    {{ time.value }} {{ time.label }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  duration: moment.Duration
}

const props = defineProps<Props>()
const { duration } = toRefs(props)

const time = computed<{ value: number; label: string }>(() => {
  if (duration.value.days()) {
    return { value: duration.value.days(), label: 'Days' }
  }

  if (duration.value.hours()) {
    return { value: duration.value.hours(), label: 'Hours' }
  }

  if (duration.value.minutes()) {
    return { value: duration.value.minutes(), label: 'Minutes' }
  }

  return { value: duration.value.seconds(), label: 'Seconds' }
})
</script>
