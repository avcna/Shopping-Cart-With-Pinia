<template>

  <p class="text-[#507687] font-bold text-[32px]">My Shopping Cart</p>

  <div class="container mx-auto p-6">

    <table class="w-full border-collapse">

      <thead>

        <tr class="border-b text-left">

          <th class="p-4">Product</th>

          <th class="p-4">Price</th>

          <th class="p-4">Quantity</th>

          <th class="p-4">Total Price</th>

          <th class="p-4">Delete Product</th>

        </tr>

      </thead>

      <tbody>

        <tr v-for="item in myCart" :key="item.id" class="border-b">

          <td class="flex items-center p-4">

            <img
              :src="item.image"
              alt="Product"
              class="w-16 h-16 object-cover rounded-md mr-4"
            />
             {{ item.title }}
          </td>

          <td class="p-4">{{ item.price }}</td>

          <td class="p-4 flex items-center">

            <button class="px-2 py-1 bg-gray-700 text-white rounded-md">
               -
            </button>

            <span class="mx-2">{{ item.quantity }}</span>

            <button class="px-2 py-1 bg-gray-700 text-white rounded-md">
               +
            </button>

          </td>

          <td class="p-4"> {{ item.price * item.quantity }} </td>

          <td class="p-4">

            <button class="px-4 py-2 bg-red-600 text-white rounded-md">
               Delete
            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCartStore } from '../store/Cart'

const cart_store = useCartStore()
const myCart = computed<any[]>(() => cart_store.cart)

onMounted(() => {
  console.log('mycart: ', cart_store.cart)
})
</script>

