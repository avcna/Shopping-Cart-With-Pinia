<template>

  <div class="grid grid-cols-2 gap-x-[44px]">

    <div class="w-[400px] h-[800px] overflow-hidden mx-auto">

      <img :src="data?.image" class="object-cover" />

    </div>

    <div class="px-[32px]">

      <h3 class="text-[24px] font-semibold">{{ data?.title }}</h3>

      <p>{{ data?.description }}</p>

      <p class="font-semibold text-[24px]">฿ {{ data?.price }}</p>

      <div class="flex justify-between">

        <ProductCounter :defaultValue="1" :onChange="handleChange" />

        <button
          class="bg-[#4e881f] !text-[#FCFAEE] p-[8px] rounded flex gap-x-[8px] items-center cursor-pointer"
        >
           ฿ {{ totalPrice }}
          <ShoppingCartOutlined />

        </button>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCounter from '../components/ProductCounter.vue'
import { ShoppingCartOutlined } from '@ant-design/icons-vue'

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

const route = useRoute()
const data = ref<Product>()
const id = computed(() => route.params.id)
const totalPrice = ref(0)

const getDetailData = async () => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${id.value.toString()}`
  )
  data.value = await res.json()
  totalPrice.value = data?.value?.price || 0
}

const handleChange = (value: number) => {
  totalPrice.value = (data?.value?.price || 0) * value
}

watch(id, getDetailData, { immediate: true })
</script>

