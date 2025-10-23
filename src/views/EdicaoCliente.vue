<template>
    <div class=" flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6 g-gray-100">
           
            <!-- Header -->
			<div class="">
				<div class="flex items-center space-x-4 max-w-lg mx-auto w-full">
					<button @click="goBack" class="text-gray-500 hover:text-gray-700">
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<div>
						<h1 class="text-2xl font-bold text-gray-900">Editar Cliente</h1>
					</div>
				</div>
			</div>

            <!-- Form Container -->
            <div class="bg-white rounded-xl  p-6 max-w-lg mx-auto w-full">
                <form @submit.prevent="updateClient" class="space-y-6">
                    <!-- Nome -->
                       
                    <div>
                        <label for="name" class="block text-sm font-base text-gray-700 mb-2">
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

                    <!-- Email -->
                    <div>
                        <label for="email" class="block text-sm font-base text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Digite o email"
                        >
                    </div>

                    <!-- Telefone -->
                    <div>
                        <label for="phone" class="block text-sm font-base text-gray-700 mb-2">
                            WhatsApp *
                        </label>
                        <input
                            id="phone"
                            v-model="form.phone"
                            type="tel"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="+56 9 XXXX XXXX"
                        >
                    </div>

                    <!-- Tipo de Documento -->
                    <div>
                        <label for="document_type" class="block text-sm font-base text-gray-700 mb-2">
                            Tipo de Documento *
                        </label>
                        <select
                            id="document_type"
                            v-model="form.document_type"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="RUT">RUT (Chile)</option>
                        </select>
                    </div>

                    <!-- Documento -->
                    <div>
                        <label for="document" class="block text-sm font-base text-gray-700 mb-2">
                            Número do Documento *
                        </label>
                        <input
                            id="document"
                            v-model="form.document"
                            type="text"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="XX.XXX.XXX-X"
                        >
                    </div>

                    <!-- Botões -->
                    <div class="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            @click="goBack"
                            class="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
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
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'
import { api } from '@/services/api.js'

const router = useRouter()
const route = useRoute()

// Reactive data
const loading = ref(false)
const form = ref({
    name: '',
    email: '',
    phone: '',
    document: '',
    document_type: 'RUT'
})

// Methods
const goBack = () => {
    router.push(`/clientes/${route.params.id}/perfil`)
}

const loadClient = async () => {
    try {
        loading.value = true
        const clientId = route.params.id
        
        // TODO: Implementar API call real
        // const response = await api.getClient(clientId)
        
        // Mock data para demonstração
        const mockClients = [
            {
                id: 1,
                name: 'María González',
                email: 'maria.gonzalez@email.com',
                phone: '+56 9 1234 5678',
                document: '12.345.678-9',
                document_type: 'RUT'
            },
            {
                id: 2,
                name: 'Carlos Fernández',
                email: 'carlos.fernandez@email.com',
                phone: '+56 9 8765 4321',
                document: '18.765.432-1',
                document_type: 'RUT'
            },
            {
                id: 3,
                name: 'Ana Rodríguez',
                email: 'ana.rodriguez@email.com',
                phone: '+56 9 5555 1234',
                document: '15.987.654-3',
                document_type: 'RUT'
            },
            {
                id: 4,
                name: 'José Silva',
                email: 'jose.silva@email.com',
                phone: '+56 9 9999 8888',
                document: '22.456.789-0',
                document_type: 'RUT'
            },
            {
                id: 5,
                name: 'Paola Martínez',
                email: 'paola.martinez@email.com',
                phone: '+56 9 7777 6666',
                document: '19.123.456-7',
                document_type: 'RUT'
            }
        ]
        
        const client = mockClients.find(c => c.id == clientId)
        if (client) {
            form.value = {
                name: client.name,
                email: client.email,
                phone: client.phone,
                document: client.document,
                document_type: client.document_type
            }
        }
    } catch (error) {
        console.error('Erro ao carregar cliente:', error)
        alert('Erro ao carregar dados do cliente')
    } finally {
        loading.value = false
    }
}

const updateClient = async () => {
    try {
        loading.value = true
        
        // TODO: Implementar API call para atualizar
        // await api.updateClient(route.params.id, form.value)
        
        alert(`Cliente "${form.value.name}" atualizado com sucesso!`)
        router.push(`/clientes/${route.params.id}/perfil`)
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error)
        alert('Erro ao atualizar cliente. Tente novamente.')
    } finally {
        loading.value = false
    }
}

// Lifecycle
onMounted(() => {
    loadClient()
})
</script>