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
						<h1 class="text-2xl font-bold text-gray-900">Novo Usuário do Sistema</h1>
					</div>
				</div>
			</div>
            <!-- Form Container -->
            <div class="rounded-xl overflow-hidden flex flex-col lg:flex-row max-w-lg mx-auto w-full">
                <!-- Form Section -->
                <div class="flex-1 p-6">
                  
                    <form @submit.prevent="createUser" class="space-y-6">
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
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white  py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Digite o nome completo"
                        >
                    </div>
                    
                    <!-- Username -->
                    <div>
                        <label for="username" class="block text-sm font-base font-medium text-[#000] mb-2">
                            Username
                        </label>

                        <input
                            id="username"
                            v-model="form.username"
                            type="text"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white  py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Digite o username"
                        >
                    </div>
                


                    <!-- Senha -->
                    <div>
                        <label for="password" class="block text-sm font-base font-medium text-[#000] mb-2">
                            Senha de Acesso *
                        </label>
                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Digite a senha"
                            minlength="6"
                        >
                    </div>

                    <!-- Confirmar Senha -->
                    <div>
                        <label for="confirm_password" class="block text-sm font-base font-medium text-[#000] mb-2">
                            Confirmar Senha *
                        </label>
                        <input
                            id="confirm_password"
                            v-model="form.confirm_password"
                            type="password"
                            required
                            class="w-full rounded-xl border border-[#e0e0e0] bg-white py-2 px-4 text-base font-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Confirme a senha"
                            minlength="6"
                        >
                        <p v-if="passwordError" class="mt-1 text-sm text-red-600">{{ passwordError }}</p>
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
                            <span>Cadastrar Usuário</span>
                        </button>
                    </div>
                </form>
                </div>
                
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'

const router = useRouter()

// Reactive data
const loading = ref(false)
const passwordError = ref('')
const form = ref({
    name: '',
    username: '',
    password: '',
    confirm_password: ''
})

// Methods
const goBack = () => {
    router.push('/usuarios')
}

const createUser = async () => {
    try {
        // Validar se as senhas coincidem
        if (form.value.password !== form.value.confirm_password) {
            passwordError.value = 'As senhas não coincidem'
            return
        }

        if (form.value.password.length < 6) {
            passwordError.value = 'A senha deve ter pelo menos 6 caracteres'
            return
        }

        // Limpar erro de senha se tudo estiver correto
        passwordError.value = ''
        loading.value = true
        
        // TODO: Implementar API call para criar usuário
        // await api.createUser(form.value)
        
        alert(`Usuário "${form.value.name}" cadastrado com sucesso!`)
        router.push('/usuarios')
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)
        alert('Erro ao cadastrar usuário. Tente novamente.')
    } finally {
        loading.value = false
    }
}

// Watcher para validar senhas em tempo real
watch([() => form.value.password, () => form.value.confirm_password], () => {
    if (form.value.confirm_password && form.value.password !== form.value.confirm_password) {
        passwordError.value = 'As senhas não coincidem'
    } else if (form.value.password && form.value.password.length < 6) {
        passwordError.value = 'A senha deve ter pelo menos 6 caracteres'
    } else {
        passwordError.value = ''
    }
})
</script>