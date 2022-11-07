<template>
  <div v-if="!isLive" class="columns-4 max-w-full text-sm lg:text-md text-center gap-3">
    <div>
      <div class="text-[180%] text-brown font-extrabold">
        {{ timeUntil.days() }}
      </div>
      <div>Days</div>
    </div>
    <div>
      <div class="text-[180%] text-brown font-extrabold">
        {{ timeUntil.hours() }}
      </div>
      <div>Hours</div>
    </div>
    <div>
      <div class="text-[180%] text-brown font-extrabold">
        {{ timeUntil.minutes() }}
      </div>
      <div>Minutes</div>
    </div>
    <div>
      <div class="text-[180%] text-brown font-extrabold">
        {{ timeUntil.seconds() }}
      </div>
      <div>Seconds</div>
    </div>
  </div>
  <div v-else>
    <a
      class="px-12 p-4 inline-block uppercase rounded-lg border cursor-pointer text-white hover:bg-indigo-600 transition-all duration-700"
      href="https://www.facebook.com/lifechurchorangeca"
      target="_blank"
    >
      Watch Live Stream Now
    </a>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone'
const isLive = ref(false)

const getTimeUntil = () => {
  const now = moment.tz('America/Los_Angeles')
  let start = moment
    .tz('America/Los_Angeles')
    .endOf('isoWeek')
    .set({ hour: 10, minute: 15, second: 0 })

  let end = moment
    .tz('America/Los_Angeles')
    .endOf('isoWeek')
    .set({ hour: 12, minute: 0, second: 0 })

  if (now.isAfter(end)) {
    start = moment
      .tz('America/Los_Angeles')
      .add(1, 'day')
      .endOf('isoWeek')
      .set({ hour: 10, minute: 15, second: 0 })
    end = moment
      .tz('America/Los_Angeles')
      .add(1, 'day')
      .endOf('isoWeek')
      .set({ hour: 12, minute: 0, second: 0 })
  }

  if (now.isBetween(start, end)) {
    isLive.value = true
  } else {
    isLive.value = false
  }

  return moment.duration(start.diff(now))
}

const timeUntil = ref(getTimeUntil())

onBeforeMount(() => {
  setInterval(() => {
    timeUntil.value = getTimeUntil()
  }, 1000)
})
</script>
