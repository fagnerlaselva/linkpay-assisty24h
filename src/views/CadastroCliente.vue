<template>
    <div class="bg-gray-100 flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6 bg-gray-100">
            <!-- Header -->
            <div class="mb-6">
                <div class="flex items-center space-x-4">
                    <button @click="goBack" class="text-gray-500 hover:text-gray-700">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-900">Novo Cliente</h1>
                        <p class="text-gray-600">Cadastre um novo cliente no sistema</p>
                    </div>
                </div>
            </div>

            <!-- Form Container -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row max-w-lg mx-auto w-full">
                <!-- Form Section -->
                <div class="flex-1 p-6">
                    <form @submit.prevent="createClient" class="space-y-6">
                    <!-- Nome -->
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                            Nome Completo *
                        </label>
                        <input
                            id="name"
                            v-model="form.name"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Digite o nome completo"
                        >
                    </div>

                    <!-- Email -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            id="email"
                            v-model="form.email"
                            type="email"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Digite o email"
                        >
                    </div>

                    <!-- Telefone -->
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                            WhatsApp*
                        </label>
                        <input
                            id="phone"
                            v-model="form.phone"
                            type="tel"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="+56 9 XXXX XXXX"
                        >
                    </div>

                    <!-- Tipo de Documento -->
                    <div>
                        <label for="document_type" class="block text-sm font-medium text-gray-700 mb-2">
                            Tipo de Documento *
                        </label>
                        <select
                            id="document_type"
                            v-model="form.document_type"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="RUT">RUT (Chile)</option>
                            
                        </select>
                    </div>

                    <!-- Documento -->
                    <div>
                        <label for="document" class="block text-sm font-medium text-gray-700 mb-2">
                            Número do Documento *
                        </label>
                        <input
                            id="document"
                            v-model="form.document"
                            type="text"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            :placeholder="getDocumentPlaceholder()"
                        >
                    </div>

                    <!-- Botões -->
                    <div class="flex justify-end space-x-4 pt-6">
                        <button
                            type="button"
                            @click="goBack"
                            class="px-6 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            :disabled="loading"
                            class="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                        >
                            <div v-if="loading" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Cadastrar Cliente</span>
                        </button>
                    </div>
                </form>
                </div>
                
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'


const router = useRouter()

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
    router.push('/clientes')
}

const getDocumentPlaceholder = () => {
    const placeholders = {
        'RUT': 'XX.XXX.XXX-X',
        'CPF': 'XXX.XXX.XXX-XX',
        'DNI': 'XXXXXXXX',
        'CI': 'XXXXXXXXX'
    }
    return placeholders[form.value.document_type] || 'Digite o documento'
}

const createClient = async () => {
    try {
        loading.value = true
        
        // TODO: Implementar API call para criar
        // await api.createClient(form.value)
        
        alert(`Cliente "${form.value.name}" cadastrado com sucesso!`)
        router.push('/clientes')
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error)
        alert('Erro ao cadastrar cliente. Tente novamente.')
    } finally {
        loading.value = false
    }
}

const handleCreateAndSend = async (data) => {
    try {
        loading.value = true
        
        // TODO: Implementar API call para criar cliente
        // const newClient = await api.createClient(form.value)
        // const clientId = newClient.id
        
        // Mock: simular criação do cliente e obter ID
        const mockClientId = Math.floor(Math.random() * 1000) + 100
        
        console.log('Cliente criado com ID:', mockClientId)
        console.log('Enviando via Zenvia API:', data.clientForm)
        
        // TODO: Implementar integração com API Zenvia
        // await api.sendWhatsAppLink(mockClientId, data.clientForm.phone)
        
        alert(`Cliente "${form.value.name}" cadastrado e enviado via Zenvia! ID: ${mockClientId}`)
        router.push('/clientes')
    } catch (error) {
        console.error('Erro ao cadastrar e enviar cliente:', error)
        alert('Erro ao cadastrar e enviar cliente. Tente novamente.')
    } finally {
        loading.value = false
    }
}
</script>