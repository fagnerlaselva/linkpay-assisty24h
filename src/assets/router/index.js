import { createRouter, createWebHistory } from "vue-router";
import Login from "../../views/Login.vue";
import Dashboard from "../../views/Dashboard.vue";
import Clientes from "../../views/Clientes.vue";
import CadastroCliente from "../../views/CadastroCliente.vue";
import PerfilCliente from "../../views/PerfilCliente.vue";
import EdicaoCliente from "../../views/EdicaoCliente.vue";

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "Login", component: Login },
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    { path: "/clientes", name: "Clientes", component: Clientes },
    { path: "/clientes/novo", name: "NovoCliente", component: CadastroCliente },
    { path: "/clientes/:id/perfil", name: "PerfilCliente", component: PerfilCliente },
    { path: "/clientes/:id/editar", name: "EditarCliente", component: EdicaoCliente },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;