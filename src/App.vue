<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>

  <section class="min-h-screen w-full bg-[#FCFAEE] relative">

    <NavBar />

    <div class="py-[48px] px-[200px]">

      <router-view :key="$route.path"></router-view>

    </div>

  </section>

</template>

