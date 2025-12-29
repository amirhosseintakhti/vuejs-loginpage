<script setup>
import { useUserStore } from '@/stores/userStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const userStore = useUserStore()
const router = useRouter()

const user = computed (()=> userStore.user)

onMounted(()=>{
  const userStored = JSON.parse(localStorage.getItem('currentUser'))

  if(userStored){
    userStore.setUser(userStored)
  }else{
    router.push('/')
  }
})

const logOut = () => {
localStorage.removeItem('currentUser')
userStore.logout();
router.push('/')
}


</script>
<template>
<div class="dashboard" v-if="user">
  <h2>welcome, {{ user.email }}</h2>
  <p>this is your dashboard </p>
  <button @click="logOut">logout</button>
</div>
<div v-else>
  <p>you are not logged in</p>
  <router-link to="/">login</router-link>
</div>
</template>