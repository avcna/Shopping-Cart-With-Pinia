import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useProductStore } from './Product'

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
  quantity: number
  totalPrice: number
}

export const useCartStore = defineStore('useCartStore', () => {
  const cart = ref<Product[]>([])

  const addCart = (data: Product) => {
    const findId = cart.value.find((item) => item.id === data.id)

    if (findId) {
      console.log('ketemu')
      findId.quantity += 1
      findId.totalPrice += data.price
    } else {
      console.log('gak ketemu')
      cart.value.push({
        ...data,
        quantity: 1,
        totalPrice: data.price,
      })
    }
  }

  return { cart, addCart }
})
