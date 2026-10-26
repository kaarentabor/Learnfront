<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes().filter(route => route.name)
</script>

<template>
  <nav class="tabs" aria-label="Pages">
    <ul>
      <li v-for="route in routes" :key="route.path" :class="{ 'is-active': $route.path === route.path }">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
