<template>
  <div class="columns-4 max-w-full text-sm lg:text-xl gap-3">
    <div>
      <div class="text-[200%] text-brown font-extrabold">
        {{ timeUntil.days() }}
      </div>
      <div>Days</div>
    </div>
    <div>
      <div class="text-[200%] text-brown font-extrabold">
        {{ timeUntil.hours() }}
      </div>
      <div>Hours</div>
    </div>
    <div>
      <div class="text-[200%] text-brown font-extrabold">
        {{ timeUntil.minutes() }}
      </div>
      <div>Minutes</div>
    </div>
    <div>
      <div class="text-[200%] text-brown font-extrabold">
        {{ timeUntil.seconds() }}
      </div>
      <div>Seconds</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone'

const now = ref(moment.tz('America/Los_Angeles'))
const nextLiveStream = moment
  .tz('America/Los_Angeles')
  .endOf('isoWeek')
  .set({ hour: 10, minute: 15, second: 0 })

const timeUntil = ref(moment.duration(nextLiveStream.diff(now.value)))

onMounted(() => {
  setInterval(() => {
    now.value = moment.tz('America/Los_Angeles')
  }, 1000)
})

watch(now, () => {
  timeUntil.value = moment.duration(nextLiveStream.diff(now.value))
})
</script>
