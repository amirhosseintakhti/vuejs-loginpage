<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('')

const router = useRouter()

function singupHandler (){
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const exist = users.find(user => user.email === email.value);

  if(exist){
    alert('کاربر قبلا ثبت نام شده')
    return
  }

  const newUser = {
    email: email.value,
    password: password.value
  }

  users.push(newUser);

  localStorage.setItem('users' , JSON.stringify(users))

  alert('ثبت‌نام با موفقیت انجام شد!')
  router.push('/')
}


</script>
<template>
<div class="singup">
  <h2>sing up</h2>
  <form @submit.prevent="singupHandler">
    <input type="email" v-model="email" placeholder="email">
    <input type="password" v-model="password" placeholder="password">
    <button type="submit" >sing up</button>
    <p>already have an account?</p>
    <router-link to="/"></router-link>
  </form>
</div>
</template>