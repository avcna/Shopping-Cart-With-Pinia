<template>

  <div class="grid grid-cols-3 w-[180px] border rounded-2xl">

    <div
      class="flex justify-center p-2 cursor-pointer items-center"
      @click="handleIncrement"
    >

      <PlusOutlined />

    </div>

    <div class="border-r border-l flex justify-center p-2"> {{ count }} </div>

    <div
      class="flex justify-center p-2 cursor-pointer items-center"
      @click="handleDecrement"
    >

      <MinusOutlined />

    </div>

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue'
const { defaultValue, onChange } = defineProps({
  defaultValue: {
    type: Number,
    required: true,
  },
  onChange: { type: Function, required: true },
})
const count = ref(defaultValue)

const handleIncrement = () => {
  count.value++
  onChange(count.value)
}

const handleDecrement = () => {
  count.value--
  onChange(count.value)
}
</script>

