<script setup lang="ts">
defineProps<{ error: { statusCode?: number; statusMessage?: string } }>()

const handleClear = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-paper px-4 text-center">
    <div>
      <p class="text-xs uppercase tracking-[0.28em] text-gold">{{ error.statusCode || 500 }}</p>
      <h1 class="mt-3 font-display text-5xl text-wine">Stránka se nenašla</h1>
      <p class="mt-4 text-muted">{{ error.statusMessage || 'Zkuste se vrátit na úvod.' }}</p>
      <button type="button" class="mt-8 rounded-full bg-wine px-6 py-3 text-cream" @click="handleClear">
        Zpět na úvod
      </button>
    </div>
  </div>
</template>
