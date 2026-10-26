<script setup>
import { computed } from 'vue'
import ItemList from '../components/ItemList.vue'
import { items } from '../items.js'

const importantItems = computed(() => items.value.filter(item => item.importance === 'high'))
</script>

<template>
  <ItemList :items="importantItems" title="Important Items" />
  <p v-if="!importantItems.length">Kõrge olulisusega asju ei ole.</p>
</template>
