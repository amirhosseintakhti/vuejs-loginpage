<script setup>
import { ref } from 'vue';


const email = ref()

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