<template>
    <div class="flex h-screen">
        <!-- Sidebar Component -->
        <Sidebar />

        <!-- Main Content -->
        <main class="flex-1 p-6">
            <!-- Header -->
            <div class="mb-6">
                <h1 class="text-2xl font-bold text-gray-900">Usuários do Sistema</h1>
                <p class="text-gray-600">Gerencie os usuários e suas permissões</p>
            </div>

            <!-- Actions Bar -->
            <div class="mb-6 flex justify-between items-center">
                <div class="flex space-x-4">
                    <!-- Search -->
                    <div class="relative">
                        <input 
                            v-model="searchTerm"
                            type="text" 
                            placeholder="Buscar por nome, email ou tipo de usuário..." 
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 pl-10 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                        <svg class="absolute left-3 top-3.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <!-- Add User Button -->
                <button @click="openAddUserModal" class="bg-default text-white px-4 py-2 rounded-full hover:bg-deep transition-colors flex items-center space-x-2">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Novo Usuário</span>
                </button>
            </div>

            <!-- Users Table -->
            <div class="bg-white rounded-xl overflow-hidden">
                <!-- Loading State -->
                <div v-if="loading" class="p-8 text-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
                    <p class="mt-2 text-gray-600">Carregando usuários...</p>
                </div>

                <!-- Table -->
                <div v-else class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Nome</th>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                                <th class="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Data Cadastro</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <button 
                                        @click="editUser(user.id)"
                                        class="text-left hover:text-indigo-600 transition-colors"
                                    >
                                        <div class="text-sm font-medium text-gray-900 hover:text-indigo-600">{{ user.name }}</div>
                                        <div class="text-sm text-gray-500">{{ user.user_type }}</div>
                                    </button>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span :class="getStatusClass(user.status)" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                                        {{ formatStatus(user.status) }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ formatDate(user.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Empty State -->
                    <div v-if="filteredUsers.length === 0" class="p-8 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <h3 class="mt-2 text-sm font-medium text-gray-900">Nenhum usuário encontrado</h3>
                        <p class="mt-1 text-sm text-gray-500">Comece adicionando um novo usuário.</p>
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
const users = ref([])
const loading = ref(true)
const searchTerm = ref('')

// Computed properties
const filteredUsers = computed(() => {
    let filtered = users.value

    if (searchTerm.value) {
        filtered = filtered.filter(user => 
            user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            user.user_type.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    }

    return filtered
})

// Methods
const loadUsers = async () => {
    try {
        loading.value = true
        // Simulating API call with mock data for now
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock data - replace with real API call: const response = await api.getUsers()
        users.value = [
            {
                id: 1,
                name: 'Admin Sistema',
                status: 'ATIVO',
                created_at: '2024-01-15'
            },
            {
                id: 2,
                name: 'María González',
                status: 'ATIVO',
                created_at: '2024-02-20'
            },
            {
                id: 3,
                name: 'Carlos Fernández',
                status: 'ATIVO',
                created_at: '2024-03-10'
            },
            {
                id: 4,
                name: 'Ana Rodríguez',
                status: 'INATIVO',
                created_at: '2024-03-15'
            },
            {
                id: 5,
                name: 'José Silva',
                status: 'ATIVO',
                created_at: '2024-04-01'
            }
        ]
    } catch (error) {
        console.error('Erro ao carregar usuários:', error)
    } finally {
        loading.value = false
    }
}

const openAddUserModal = () => {
    router.push('/usuarios/novo')
}

const editUser = (userId) => {
    router.push(`/usuarios/${userId}/editar`)
}

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
}

const formatUserType = (type) => {
    const types = {
        'ADMINISTRADOR': 'Administrador',
        'OPERADOR': 'Operador',
        'SUPERVISOR': 'Supervisor',
        'ANALISTA': 'Analista',
        'SUPORTE': 'Suporte'
    }
    return types[type] || type
}

const formatPermissions = (permission) => {
    const permissions = {
        'TOTAL': 'Acesso Total',
        'LIMITADO': 'Limitado',
        'LEITURA': 'Somente Leitura',
        'BASICO': 'Básico'
    }
    return permissions[permission] || permission
}

const formatStatus = (status) => {
    const statuses = {
        'ATIVO': 'Ativo',
        'INATIVO': 'Inativo',
        'SUSPENSO': 'Suspenso',
        'PENDENTE': 'Pendente'
    }
    return statuses[status] || status
}

const getUserTypeClass = (type) => {
    const classes = {
        'ADMINISTRADOR': 'bg-purple-100 text-purple-800',
        'OPERADOR': 'bg-blue-100 text-blue-800',
        'SUPERVISOR': 'bg-green-100 text-green-800',
        'ANALISTA': 'bg-yellow-100 text-yellow-800',
        'SUPORTE': 'bg-gray-100 text-gray-800'
    }
    return classes[type] || 'bg-gray-100 text-gray-800'
}

const getPermissionClass = (permission) => {
    const classes = {
        'TOTAL': 'bg-red-100 text-red-800',
        'LIMITADO': 'bg-orange-100 text-orange-800',
        'LEITURA': 'bg-blue-100 text-blue-800',
        'BASICO': 'bg-gray-100 text-gray-800'
    }
    return classes[permission] || 'bg-gray-100 text-gray-800'
}

const getStatusClass = (status) => {
    const classes = {
        'ATIVO': 'bg-green-100 text-green-800',
        'INATIVO': 'bg-red-100 text-red-800',
        'SUSPENSO': 'bg-yellow-100 text-yellow-800',
        'PENDENTE': 'bg-blue-100 text-blue-800'
    }
    return classes[status] || 'bg-gray-100 text-gray-800'
}

// Lifecycle
onMounted(() => {
    loadUsers()
})
</script>