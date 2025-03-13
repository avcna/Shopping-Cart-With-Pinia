<template>

  <Spin></Spin>

  <div class="grid grid-cols-4 gap-[24px]">

    <ProductCard v-for="item in data" :key="item.id" :item="item" />

  </div>

</template>

<script setup lang="ts">
type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

import { onMounted, ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../store/Product'

const data = ref<Product[]>([])
const product_store = useProductStore()
const getData = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    data.value = await res.json()
    product_store.addProduct(data.value)
  } catch (error) {}
}

onMounted(() => {
  getData()
})
</script>

