<template>
    <div class="bg-gray-100 flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6 bg-gray-100">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div class="mt-4 p-6 bg-white rounded-lg shadow-md">
                <p class="text-gray-600">Pronto para usar API.js com Composition API!</p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import { api } from '@/services/api.js'

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