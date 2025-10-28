<template>
    <div class="flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6">
            <!-- Header -->
			<div class="">
				<div class="flex items-center space-x-4 max-w-lg mx-auto w-full">
					<button @click="goBack" class="text-gray-500 hover:font-medium text-[#000]">
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<div>
						<h1 class="text-2xl font-bold text-gray-900">Editar Usuário</h1>
					</div>
				</div>
			</div>

            <!-- Form Container -->
            <div class="bg-white rounded-xl p-6 max-w-lg mx-auto w-full">
                <form @submit.prevent="updateUser" class="space-y-6">
                    <!-- Nome -->
                    <div>
                        <label for="name" class="block text-sm font-base font-medium text-[#000] mb-2">
                            Nome Completo *
                        </label>
                        <input
                            id="name"
                            v-model="form.name"
                            type="text"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Digite o nome completo"
                        >
                    </div>
                    <div>
                        <label for="nickname" class="block text-sm font-base font-medium text-[#000] mb-2">
                           Nickname *
                        </label>
                        <input
                            id="nickname"
                            v-model="form.nickname"
                            type="text"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Digite o nickname "
                        >
                    </div>
                    <!-- Status -->
                    <div>
                        <label for="status" class="block text-sm font-base font-medium text-[#000] mb-2">
                            Status *
                        </label>
                        <select
                            id="status"
                            v-model="form.status"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                        </select>
                    </div>

                    
                    <!-- Botões -->
                    <div class="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            @click="goBack"
                            class="px-6 py-2 border border-gray-300 rounded-full font-medium text-[#000] hover:bg-gray-50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            :disabled="loading"
                            class="px-6 py-2 bg-default text-white rounded-full hover:bg-deep disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                        >
                            <div v-if="loading" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Salvar Alterações</span>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'

const router = useRouter()
const route = useRoute()

// Reactive data
const loading = ref(false)
const form = ref({
    name: '',
    status: '',
    nickname: '',
})

// Methods
const goBack = () => {
    router.push('/usuarios')
}



const updateUser = async () => {
    try {

        // TODO: Implementar API call para atualizar
        // await api.updateUser(route.params.id, form.value)
        
        alert(`Usuário "${form.value.name}" atualizado com sucesso!`)
        router.push('/usuarios')
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error)
        alert('Erro ao atualizar usuário. Tente novamente.')
    } finally {
        loading.value = false
    }
}


// Lifecycle
onMounted(() => {
    loadUser()
})
</script>