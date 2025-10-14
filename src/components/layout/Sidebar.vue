<template>
    <aside class="w-20 bg-white border-r border-slate-300">
        <div class="h-full flex flex-col items-center py-4">
            <!-- Logo -->
            <div class="p-2">
                <img src="https://cms-content.assisty24h.com.br/cms/public/user-avatar-68cc4ac0ec8e3fb4ef4c439e.png" alt="Logo" class="h-[34px] w-[40px]">
            </div>

            <!-- Navigation -->
            <nav class="flex-1 w-full px-2 space-y-2 mt-6 text-slate-600">
                <!-- Dashboard -->
                <router-link to="/dashboard" class="w-full p-3 flex justify-center rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" :class="{ 'bg-indigo-50 text-indigo-600': isActiveRoute('/dashboard') }">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </router-link>

                <!-- Clientes -->
                <router-link to="/clientes" class="w-full p-3 flex justify-center rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" :class="{ 'bg-indigo-50 text-indigo-600': isActiveRoute('/clientes') }">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </router-link>

                <!-- Cliente novo -->
                <router-link to="/clientes/novo" class="w-full p-3 flex justify-center rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" :class="{ 'bg-indigo-50 text-indigo-600': isActiveRoute('/clientes/novo') }">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </router-link>

                <!-- Relatórios -->
                <router-link to="/relatorios" class="hidden w-full p-3 flex justify-center rounded-lg text-gray-500 hover:bg-gray-50 transition-colors" :class="{ 'bg-indigo-50 text-indigo-600': isActiveRoute('/relatorios') }">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </router-link>
            </nav> 

            <!-- Logout Link -->
            <div class="mb-4">
                <router-link to="/login" class="w-full p-3 flex justify-center text-red-500 hover:bg-red-50 transition-colors">
                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span class="text-sm font-medium">Sair</span>
                </router-link>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (path) => {
    return route.path === path
}
</script>