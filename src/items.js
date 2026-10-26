import { ref } from 'vue'

export const nextId = () => Date.now() + Math.random()

export const items = ref([
  { id: nextId(), text: 'Piim', isDone: false, importance: 'high' },
  { id: nextId(), text: 'Viin', isDone: true, importance: 'low' },
  { id: nextId(), text: 'Sai', isDone: true, importance: 'medium' },
  { id: nextId(), text: 'Mac', isDone: false, importance: 'low' },
])
