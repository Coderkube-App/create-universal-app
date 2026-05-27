<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="card">
    <h1>Universal Vue App</h1>
    <p>Scaffolded dynamically using <code>create-universal-app</code>.</p>
    <button @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
  min-width: 300px;
}

h1 {
  font-size: 2.8em;
  margin: 0 0 0.3em 0;
  background: linear-gradient(135deg, #4ade80, #22d3ee, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  color: #94a3b8;
  font-size: 1.1em;
  margin-bottom: 2rem;
}

button {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
  padding: 0.7em 1.5em;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(34, 197, 94, 0.3);
  transition: all 0.25s ease;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
}
</style>
