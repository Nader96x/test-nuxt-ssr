<template>
  <form @submit.prevent="submitProduct">
    <input v-model="product.name" type="text" placeholder="Name">
    <input v-model="product.description" type="text" placeholder="Description">
    <!-- Add more fields as needed -->
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        description: ''
        // Initialize other fields here
      }
    }
  },
  methods: {
    async submitProduct() {
      await this.$axios.post('/products', this.product);
      // Handle response or redirect
    }
  }
}
</script>
