// ...existing code...
<script setup>
import { ref, computed } from 'vue'
import ItemList from './itemList.vue'

const nextId = () => Date.now() + Math.random()

const items = ref([
  { id: nextId(), text: 'Piim', isDone: false },
  { id: nextId(), text: 'Viin', isDone: true },
  { id: nextId(), text: 'Sai', isDone: true },
  { id: nextId(), text: 'Mac', isDone: false },
])

const newItem = ref('')

const doneItems = computed(() => items.value.filter(item => item.isDone))
const toDoItems = computed(() => items.value.filter(item => !item.isDone))

function add() {
  const text = newItem.value.trim()
  if (!text) return

  items.value.push({
    id: nextId(),
    text,
    isDone: false,
  })

  newItem.value = ''
}
</script>

<template>
  <div class="container mt-3">
    <div class="field has-addons">
      <div class="control">
        <input v-model="newItem" class="input" type="text" placeholder="Add item">
      </div>
      <div class="control">
        <button class="button is-info" @click="add">Add</button>
      </div>
    </div>

    <h1>All Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>

    <h1>Done Items</h1>
    <ul>
      <li v-for="item in doneItems" :key="item.id">
        {{ item.text }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
  </div>
  <ItemList :items="items" title="All Items"></ItemList>
  <ItemList :items="doneItems" title="Done Items"></ItemList>
  <ItemList :items="toDoItems" title="To-Do Items"></ItemList>
</template>