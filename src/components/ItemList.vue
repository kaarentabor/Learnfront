<script setup>
defineProps(['items', 'title'])
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
      </li>
    </ul>
  </section>
</template>
