<template>
    <div class="flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6 ">
            <!-- Header -->
            <div class="mb-6">
                <h1 class="text-2xl font-bold  text-gray-900">Clientes</h1>
                <p class="text-gray-600">Gerencie seus clientes e prospects</p>
            </div>

            <!-- Actions Bar -->
            <div class="mb-6 flex justify-between items-center">
                <div class="flex space-x-4">
                    <!-- Search -->
                    <div class="relative">
                        <input 
                            v-model="searchTerm"
                            type="text" 
                            placeholder="Buscar por nome, email, telefone ou documento..." 
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 pl-10 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                        <svg class="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <!-- Add Client Button -->
                <button @click="openAddClientModal" class="bg-default text-white px-4 py-2 rounded-full hover:bg-deep transition-colors flex items-center space-x-2">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Novo Cliente</span>
                </button>
            </div>

            <!-- Clients Table -->
            <div class="bg-white rounded-xl overflow-hidden">
                <!-- Loading State -->
                <div v-if="loading" class="p-8 text-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
                    <p class="mt-2 text-gray-600">Carregando clientes...</p>
                </div>

                <!-- Table -->
                <div v-else class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Nome</th>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Email</th>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Telefone</th>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Documento</th>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Data Cadastro</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                                                        <tr v-for="client in filteredClients" :key="client.id" class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <button 
                                        @click="editClient(client.id)"
                                        class="text-left hover:text-indigo-600 transition-colors"
                                    >
                                        <div class="text-sm font-medium text-gray-900 hover:text-indigo-600">{{ client.name }}</div>
                                    </button>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ client.email }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ client.phone }}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ client.document }}</div>
                                    <div class="text-sm text-gray-500">{{ client.document_type }}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDate(client.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Empty State -->
                    <div v-if="filteredClients.length === 0" class="p-8 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 class="mt-2 text-sm font-medium text-gray-900">Nenhum cliente encontrado</h3>
                        <p class="mt-1 text-sm text-gray-500">Comece adicionando um novo cliente.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'

const router = useRouter()

// Reactive data
const clients = ref([])
const loading = ref(true)
const searchTerm = ref('')

// Computed properties
const filteredClients = computed(() => {
    let filtered = clients.value

    if (searchTerm.value) {
        filtered = filtered.filter(client => 
            client.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            client.phone.includes(searchTerm.value) ||
            client.document.includes(searchTerm.value)
        )
    }

    return filtered
})

// Methods
const loadClients = async () => {
    try {
        loading.value = true
        // Simulating API call with mock data for now
        await new Promise(resolve => setTimeout(resolve, 1000))
        
                // Mock data - replace with real API call: const response = await api.getClients()
        clients.value = [
            {
                id: 1,
                name: 'María González',
                email: 'maria.gonzalez@email.com',
                phone: '+56 9 1234 5678',
                company: null,
                document: '12.345.678-9',
                document_type: 'RUT',
                created_at: '2024-01-15'
            },
            {
                id: 2,
                name: 'Carlos Fernández',
                email: 'carlos.fernandez@email.com',
                phone: '+56 9 8765 4321',
                company: null,
                document: '18.765.432-1',
                document_type: 'RUT',
                created_at: '2024-02-20'
            },
            {
                id: 3,
                name: 'Ana Rodríguez',
                email: 'ana.rodriguez@email.com',
                phone: '+56 9 5555 1234',
                company: null,
                document: '15.987.654-3',
                document_type: 'RUT',
                created_at: '2024-03-10'
            },
            {
                id: 4,
                name: 'José Silva',
                email: 'jose.silva@email.com',
                phone: '+56 9 9999 8888',
                company: null,
                document: '22.456.789-0',
                document_type: 'RUT',
                created_at: '2024-03-15'
            },
            {
                id: 5,
                name: 'Paola Martínez',
                email: 'paola.martinez@email.com',
                phone: '+56 9 7777 6666',
                company: null,
                document: '19.123.456-7',
                document_type: 'RUT',
                created_at: '2024-04-01'
            }
        ]
    } catch (error) {
        console.error('Erro ao carregar clientes:', error)
    } finally {
        loading.value = false
    }
}

const openAddClientModal = () => {
    router.push('/clientes/novo')
}

const editClient = (clientId) => {
    router.push(`/clientes/${clientId}/perfil`)
}



const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
}

// Lifecycle
onMounted(() => {
    loadClients()
})
</script>