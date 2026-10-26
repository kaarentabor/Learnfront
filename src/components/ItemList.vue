<script setup>
defineProps(['items', 'title'])

const importanceClasses = {
  high: 'is-danger',
  medium: 'is-warning',
  low: 'is-success',
}
const importanceLabels = { high: 'Kõrge', medium: 'Keskmine', low: 'Madal' }
</script>

<template>
  <section class="mb-5">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        <label class="checkbox">
          <input type="checkbox" v-model="item.isDone">
          {{ item.text }}
        </label>
        <span class="tag ml-2" :class="importanceClasses[item.importance]">
          {{ importanceLabels[item.importance] }}
        </span>
      </li>
    </ul>
  </section>
</template>
