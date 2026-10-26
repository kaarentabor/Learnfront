<script setup>
import { ref, computed } from 'vue'
import ItemList from '../components/ItemList.vue'

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

  items.value.push({ id: nextId(), text, isDone: false })
  newItem.value = ''
}
</script>

<template>
  <form class="field has-addons" @submit.prevent="add">
    <div class="control">
      <input v-model="newItem" class="input" type="text" placeholder="Add item" aria-label="New item">
    </div>
    <div class="control">
      <button class="button is-info" type="submit">Add</button>
    </div>
  </form>

  <ItemList :items="items" title="All Items" />
  <ItemList :items="doneItems" title="Done Items" />
  <ItemList :items="toDoItems" title="ToDo Items" />
</template>
