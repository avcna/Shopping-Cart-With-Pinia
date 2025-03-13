import { defineStore } from 'pinia'
import { ref } from 'vue'

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

export const useProductStore = defineStore('useProductStore', () => {
  const product = ref<Product[]>([])

  const addProduct = (data: Product[]) => {
    product.value.push(...data)
  }

  return { product, addProduct }
})
