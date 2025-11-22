<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const email = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

function inputhandler(){
  const users = JSON.parse( localStorage.getItem("users") || [] )

  const foundUser = users.find(
    user => user.email == email.value && user.password == password.value
  )
  if(!foundUser){
    alert("invalid credential")
    return
  }

  localStorage.setItem("currentUser" , JSON.stringify(foundUser))
  userStore.setUser(foundUser)
  router.push("/dashboard")

}

</script>

<template>
  <div class="login">
    <h2>login</h2>
    <form @submit.prevent="inputhandler">
      <input type="email" v-model="email" placeholder="email" required>
      <input type="password" v-model="password" placeholder="password" required>
      <button type="submit">login</button>
      <p>
        don't have an account?
        <router-link to="/singup">sing up</router-link>
      </p>
    </form>
  </div>
</template>

<style>

</style>