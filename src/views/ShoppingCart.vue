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

          <td class="p-4">

            <button
              class="px-2 py-1 bg-gray-700 !text-white rounded-md"
              @click="cart_store.decrementProduct(item.id)"
            >

              <MinusOutlined />

            </button>

            <span class="mx-2">{{ item.quantity }}</span>

            <button
              class="px-2 py-1 bg-gray-700 !text-white rounded-md"
              @click="cart_store.incrementProduct(item.id)"
            >

              <PlusOutlined />

            </button>

          </td>

          <td class="p-4"> {{ item.price * item.quantity }} </td>

          <td class="p-4">

            <button
              class="px-4 py-2 bg-red-600 !text-white rounded-md flex items-center gap-x-[10px]"
              @click="cart_store.removeProduct(item.id)"
            >

              <DeleteOutlined />
               Remove
            </button>

          </td>

        </tr>

      </tbody>

    </table>

    <div class="flex justify-end mt-[36px]">

      <div class="flex gap-x-[10px] items-center">

        <button
          class="bg-red-600 !text-[#FCFAEE] p-[8px] rounded flex gap-x-[8px] items-center cursor-pointer"
          @click="cart_store.clearCart"
        >

          <DeleteOutlined />
           Clear Cart
        </button>

        <button
          class="bg-[#4e881f] !text-[#FCFAEE] p-[8px] rounded flex gap-x-[8px] items-center cursor-pointer"
        >

          <ShoppingCartOutlined />
           100
        </button>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCartStore } from '../store/Cart'
import {
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons-vue'

const cart_store = useCartStore()
const myCart = computed<any[]>(() => cart_store.cart)
</script>

