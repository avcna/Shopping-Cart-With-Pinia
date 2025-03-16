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
}

export const useProductStore = defineStore('useProductStore', () => {
  const product = ref<Product[]>([])
  const searchValue = ref('')
  const searchedProducts = computed(() =>
    product.value.filter((item) => {
      if (searchValue.value == '') {
        return product
      } else {
        return item.title
          .toLowerCase()
          .includes(searchValue.value.toLowerCase())
      }
    })
  )

  const addProduct = (data: Product[]) => {
    product.value.push(...data)
  }

  return { product, searchValue, searchedProducts, addProduct }
})
