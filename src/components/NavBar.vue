<template>

  <div
    class="bg-[#384B70] text-[#FCFAEE] sticky top-0 z-10 px-[64px] py-[24px] flex justify-between items-center"
  >

    <div class="flex gap-[32px]">

      <router-link to="/">Home</router-link>

      <router-link to="/shopping-cart">Shopping Cart</router-link>

    </div>

    <div class="border border-white rounded p-[8px]">

      <input
        type="text"
        class="outline-none"
        placeholder="Search"
        v-model="product_store.searchValue"
      />

    </div>

  </div>

</template>

<script setup lang="ts">
import { useProductStore } from '../store/Product'

const product_store = useProductStore()
</script>

