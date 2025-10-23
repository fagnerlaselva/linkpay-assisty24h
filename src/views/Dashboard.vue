<template>
    <div class="flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6 ">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div class="mt-4 p-6 bg-white rounded-lg">
                <p class="text-gray-600">Pronto para usar API.js com Composition API!</p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'

onMounted(() => {
    // Dashboard initialization logic here
    console.log('Dashboard carregado')
})
</script>

// src/services/api.js
export const api = {
  async login(credentials) {
    // sua lógica de API aqui
  },
  async getDashboardData() {
    // suas chamadas para o dashboard
  }
}