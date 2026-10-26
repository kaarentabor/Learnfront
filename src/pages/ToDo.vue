<script setup>
import { ref, computed } from 'vue'
import ItemList from '../components/ItemList.vue'

const nextId = () => Date.now() + Math.random()

const items = ref([
  { id: nextId(), text: 'Piim', isDone: false, importance: 'high' },
  { id: nextId(), text: 'Viin', isDone: true, importance: 'low' },
  { id: nextId(), text: 'Sai', isDone: true, importance: 'medium' },
  { id: nextId(), text: 'Mac', isDone: false, importance: 'low' },
])

const newItem = ref('')
const newImportance = ref('medium')
const doneItems = computed(() => items.value.filter(item => item.isDone))
const toDoItems = computed(() => items.value.filter(item => !item.isDone))

function add() {
  const text = newItem.value.trim()
  if (!text) return

  items.value.push({ id: nextId(), text, isDone: false, importance: newImportance.value })
  newItem.value = ''
}
</script>

<template>
  <form class="field has-addons" @submit.prevent="add">
    <div class="control">
      <input v-model="newItem" class="input" type="text" placeholder="Add item" aria-label="New item">
    </div>
    <div class="control">
      <div class="select">
        <select v-model="newImportance" aria-label="Olulisus">
          <option value="high">Kõrge</option>
          <option value="medium">Keskmine</option>
          <option value="low">Madal</option>
        </select>
      </div>
    </div>
    <div class="control">
      <button class="button is-info" type="submit">Add</button>
    </div>
  </form>

  <ItemList :items="items" title="All Items" />
  <ItemList :items="doneItems" title="Done Items" />
  <ItemList :items="toDoItems" title="ToDo Items" />
</template>
