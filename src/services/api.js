// API service for telemarketing application
const API_BASE_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class ApiService {
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        }

        try {
            const response = await fetch(url, config)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('API request failed:', error)
            throw error
        }
    }

    // Authentication
    async login(credentials) {
        return this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        })
    }

    async logout() {
        return this.request('/auth/logout', {
            method: 'POST',
        })
    }

    // Dashboard data
    async getDashboardData() {
        return this.request('/dashboard')
    }

    // User management
    async getUserProfile() {
        return this.request('/user/profile')
    }

    async updateUserProfile(userData) {
        return this.request('/user/profile', {
            method: 'PUT',
            body: JSON.stringify(userData),
        })
    }

    // Telemarketing specific endpoints
    async getCampaigns() {
        return this.request('/campaigns')
    }

    async getLeads() {
        return this.request('/leads')
    }

    async createLead(leadData) {
        return this.request('/leads', {
            method: 'POST',
            body: JSON.stringify(leadData),
        })
    }

    async updateLead(leadId, leadData) {
        return this.request(`/leads/${leadId}`, {
            method: 'PUT',
            body: JSON.stringify(leadData),
        })
    }

    // Client management
    // Client status types: 'waiting_payment' | 'in_grace' | 'active' | 'cancelled' | 'error'
    // Document types: 'CPF' (Brazil), 'RUT' (Chile), 'DNI' (Argentina), 'CI' (Colombia), etc.
    async getClients() {
        return this.request('/clients')
    }

    async getClient(clientId) {
        return this.request(`/clients/${clientId}`)
    }

    async createClient(clientData) {
        return this.request('/clients', {
            method: 'POST',
            body: JSON.stringify(clientData),
        })
    }

    async updateClient(clientId, clientData) {
        return this.request(`/clients/${clientId}`, {
            method: 'PUT',
            body: JSON.stringify(clientData),
        })
    }

    async sendClient(clientId) {
        return this.request(`/clients/${clientId}/send`, {
            method: 'POST',
        })
    }
}

// Export singleton instance
export const api = new ApiService()

// Export individual methods for convenience
export const { login, logout, getDashboardData, getUserProfile, updateUserProfile, getCampaigns, getLeads, createLead, updateLead, getClients, getClient, createClient, updateClient, sendClient } = api