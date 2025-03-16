import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

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
  const totalPrice = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)
  })

  const addCart = (data: Product) => {
    const findId = cart.value.find((item) => item.id === data.id)

    if (findId) {
      findId.quantity += 1
      findId.totalPrice += data.price
      alert('Successfully added product to cart')
    } else {
      cart.value.push({
        ...data,
        quantity: 1,
        totalPrice: data.price,
      })
      alert('Successfully added product to cart')
    }
  }

  const removeProduct = (id: number) => {
    cart.value = cart.value.filter((item: Product) => item.id !== id)
  }

  const incrementProduct = (id: number) => {
    const findId = cart.value.find((item: Product) => item.id === id)
    if (findId) {
      findId.quantity += 1
      findId.totalPrice += findId.price
    }
  }

  const decrementProduct = (id: number) => {
    const findId = cart.value.find((item: Product) => item.id === id)
    if (findId) {
      findId.quantity -= 1
      findId.totalPrice -= findId.price

      if (findId.quantity === 0) {
        removeProduct(id)
      }
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  return {
    cart,
    totalPrice,
    addCart,
    incrementProduct,
    decrementProduct,
    removeProduct,
    clearCart,
  }
})
