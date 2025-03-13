<template>

  <div
    class="flex flex-col gap-[16px] border border-[#507687] rounded-xl p-[16px]"
  >

    <p class="text-[#507687] text-[12px]"> {{ item.category }} </p>

    <div class="w-full flex justify-center">

      <div class="w-[150px] h-[150px] overflow-hidden rounded-xl">

        <img :src="item.image" class="object-cover" />

      </div>

    </div>

    <h3 class="font-semibold text-[18px]">{{ item.title }}</h3>

    <div class="flex justify-between">

      <router-link :to="`product/${item.id}`" class="!text-[#FCFAEE]">

        <button
          class="bg-[#384B70] text-[#FCFAEE] p-[8px] rounded flex gap-x-[8px] items-center cursor-pointer"
        >
           Detail
        </button>

      </router-link>

      <button
        class="bg-[#4e881f] !text-[#FCFAEE] p-[8px] rounded flex gap-x-[8px] items-center cursor-pointer"
        @click="
          cart_store.addCart({ ...item, quantity: 1, totalPrice: item.price })
        "
      >

        <ShoppingCartOutlined />
         ฿ {{ item.price }}
      </button>

    </div>

  </div>

</template>

<script setup lang="ts">
import { ShoppingCartOutlined } from '@ant-design/icons-vue'
import { useCartStore } from '../store/Cart'

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

const cart_store = useCartStore()

const { item } = defineProps<{
  item: Product
}>()
</script>

