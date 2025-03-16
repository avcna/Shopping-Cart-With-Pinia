<template>

  <Spin :spinning="loading" :indicator="h(LoadingOutlined, { spin: true })">

    <div class="grid grid-cols-4 gap-[24px]">

      <ProductCard v-for="item in data" :key="item.id" :item="item" />

    </div>

  </Spin>

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

import { onMounted, ref, h, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../store/Product'
import { Spin } from 'ant-design-vue'
import { LoadingOutlined } from '@ant-design/icons-vue'

const data = computed(() => product_store.searchedProducts)
const loading = ref(false)
const product_store = useProductStore()
const getData = async () => {
  loading.value = true
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data: Product[] = await res.json()
    product_store.addProduct(data)
  } catch (error) {
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getData()
})
</script>

