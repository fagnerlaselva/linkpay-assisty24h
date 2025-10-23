<template>
  <div class="grid min-h-screen w-full grid-cols-12 overflow-hidden bg-default">
      <!-- Left Section -->
      <div class="element z-3 col-span-7 flex p-32 text-white" style="">
        <div class="w-full min-w-sm flex flex-col justify-between ">
          <div>
            <!-- <h1 class="flex items-center text-2xl font-bold">Tapconnect <span class="ml-2 text-sm font-light">Over 3k+ users</span></h1> -->
            <img src="/src/assets/images/assisty24h-logo-write-small.png" alt="Assisty 24h Logo" class="w-[200px]" style="filter: brightness(0) invert(1);" />
          </div>
          <div>
            <h1 class="my-8 text-7xl leading-20 font-bold text-indigo-50">Asistencia 24 horas en Chile donde sea que estés</h1>
            <p class="mb-2 text-xl">Nuestro sitio web</p> 
            <div class="flex h-12 justify-start items-center gap-x-6 dark:text-white">
                <a class="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-white/50  disabled:text-white  text-black  active:border-0 hover:text-gray-100 active:text-gray-300 text-sm sm:text-base"
                  href="https://assisty24h.cl"
                  :target="'_blank'">
                    <svg aria-hidden="true" class="h-3 w-3 flex-none fill-violet-600 group-active:fill-current">
                        <path
                            d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
                        </path>
                    </svg>
                   <span class="ml-3">assisty24h.cl/</span>
                </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="relative z-3 col-span-5 flex items-center justify-center rounded-tl-[44px] bg-white">
        <div class="absolute top-4 right-0 -left-4 z-2 h-full w-full rounded-tl-[44px] bg-white/50"></div>
        <div class="z-10 w-full flex items-center justify-center">
          <div class="z-4 w-full max-w-sm bg-white p-4 sm:p-10 lg:max-w-lg xl:max-w-xl">
            <h2 class="mb-10 text-4xl font-bold">¡Hola, vamos a vender! 👋</h2>
            <!-- <p class="mb-6 text-gray-500">Pranveer Singh Institute of Technology</p> -->

            <!-- Email -->
            <input type="email" placeholder="Email" class="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-6" />

            <!-- Password -->
            <input type="password" placeholder="Password" class="w-full rounded-xl border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-6" />

            <!-- Remember Me and Forgot Password -->
            <div class="mb-10 flex items-center justify-between hidden">
              <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox text-indigo-600" checked />
                <span class="font-medium text-gray-600">Remember me</span>
              </label>
              <a href="#" class="text-lg font-medium text-indigo-600 hover:underline">Esqueceu sua senha?</a>
            </div>

            <!-- Login Button -->
            <!-- <button class="mb-4 w-full rounded-lg bg-indigo-600 py-3 font-bold text-white transition hover:bg-indigo-700">Log In</button> -->
            <button @click="login" class="mb-6 w-full transform-gpu rounded-full bg-default from-blue-500 to-purple-500 px-8 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg">Vamos allá</button>

            <!-- Or -->
            <div class="mb-6 flex items-center justify-center hidden">
              <span class="w-1/5 border-b border-white lg:w-1/4"></span>
              <span class="mx-2 text-xs text-gray-400">ou</span>
              <span class="w-1/5 border-b border-white lg:w-1/4"></span>
            </div>

            <!-- Social Login -->
            <div class="flex space-x-4 hidden">
              <button class="flex w-1/2 items-center justify-center rounded-lg border border-gray-300 py-2 font-medium text-slate-700 hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/303108/facebook-1-logo.svg" class="mr-2 h-5 w-5" alt="Facebook" />
                Facebook
              </button>
              <button class="flex w-1/2 items-center justify-center rounded-lg border border-gray-300 py-2 font-medium text-slate-700 hover:bg-gray-50">
                <img src="https://www.svgrepo.com/show/355037/google.svg" class="mr-2 h-5 w-5" alt="Google" />
                Google
              </button>
            </div>

            <!-- Sign Up -->
            <p class="mt-12 text-center text-sm text-gray-500 hidden">Não tem uma conta? <a href="#" class="text-indigo-600 hover:underline">Inscrever-se</a></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { api } from '@/services/api'

const router = useRouter()

const login = async () => {
  const credentials = {
    email: 'user@example.com', // replace with actual data
    password: 'password' // replace with actual data
  }
  await api.login(credentials)
  router.push('/dashboard')
}
</script>
