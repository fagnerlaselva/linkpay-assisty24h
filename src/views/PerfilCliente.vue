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
                        <h1 class="text-2xl font-semibold text-gray-900">Perfil do Cliente</h1>
                        <p class="text-gray-600">Visualize as informações do cliente</p>
                    </div>
                </div>
            </div>

            <!-- Profile Container -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row">
                <!-- Profile Section -->
                <div class="flex-1 p-6">
                    <div class="space-y-6 max-w-lg">
                        <!-- Nome -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Nome Completo
                            </label>
                            <div class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900">
                                {{ form.name || 'Não informado' }}
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <div class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900">
                                {{ form.email || 'Não informado' }}
                            </div>
                        </div>

                        <!-- Telefone -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                WhatsApp
                            </label>
                            <div class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900">
                                {{ form.phone || 'Não informado' }}
                            </div>
                        </div>

                        <!-- Tipo de Documento -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Tipo de Documento
                            </label>
                            <div class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900">
                                {{ form.document_type || 'Não informado' }}
                            </div>
                        </div>

                        <!-- Documento -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Número do Documento
                            </label>
                            <div class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900">
                                {{ form.document || 'Não informado' }}
                            </div>
                        </div>

                        <!-- Botão Editar -->
                        <div class="flex justify-end pt-6">
                            <button
                                @click="goToEditPage"
                                class="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center space-x-2"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                </svg>
                                <span>Editar Cliente</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- WhatsApp Action Section -->
                <WhatsAppSendBox 
                    :client-form="form"
                    :client-id="route.params.id"
                    @send-to-whats-app="handleSendToWhatsApp"
                />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'
import WhatsAppSendBox from '@/components/WhatsAppSendBox.vue'

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
    router.push('/clientes')
}

const goToEditPage = () => {
    router.push(`/clientes/${route.params.id}/editar`)
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

const handleSendToWhatsApp = (data) => {
    // TODO: Implementar integração com API Zenvia
    // Enviar link com ID do cliente via Zenvia API
    const { clientForm, clientId } = data
    
    // Placeholder para futura integração
    console.log('Enviando via Zenvia API para cliente ID:', clientId)
    console.log('Dados do formulário:', clientForm)
    alert(`Funcionalidade em desenvolvimento - ID do cliente: ${clientId}`)
    
    // Futura implementação:
    // await api.sendWhatsAppLink(clientId, clientForm.phone)
}

// Lifecycle
onMounted(() => {
    loadClient()
})
</script>