<script setup>
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

function inputhandler() {
  const users = JSON.parse(localStorage.getItem('users')) || []

  const foundUser = users.find(
    (user) => user.email === email.value && user.password === password.value,
  )
  if (!foundUser) {
    alert('invalid credential')
    return
  }

  localStorage.setItem('currentUser', JSON.stringify(foundUser))
  userStore.setUser(foundUser)
  router.push('/dashboard')
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-box fade-in">
      <h2>login</h2>
      <p class="subtitle">Log in to your account</p>

      <form @submit.prevent="inputhandler">
        <input type="email" v-model="email" placeholder="email" required />
        <input type="password" v-model="password" placeholder="password" required />
        <button type="submit">login</button>

      </form>
      <p class="switch">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .auth-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    font-family: 'Poppins', sans-serif;
  }

  .auth-box {
    background: white;
    padding: 2rem 2.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    width: 360px;
    text-align: center;
    animation: fadeIn 0.8s ease;
  }

  .auth-box h2 {
    margin-bottom: 0.5rem;
    color: #4f46e5;
  }

  .subtitle {
    color: #777;
    margin-bottom: 1.5rem;
  }

  .auth-box input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.95rem;
  }

  .auth-box button {
    width: 100%;
    background: #4f46e5;
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
  }

  .auth-box button:hover {
    background: #4338ca;
  }

  .switch {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .switch a {
    color: #4f46e5;
    font-weight: 600;
    text-decoration: none;
  }

  .fade-in {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>

