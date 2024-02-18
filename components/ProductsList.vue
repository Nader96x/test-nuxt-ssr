<template>
  <div>
    <h3>Product Count is {{products.length}}</h3>
<!--    <div v-for="p in products">{{products}}</div>-->
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
    </div>
    <button @click="fetch">Get Products</button>
  </div>
</template>


<script setup>
import axios from "axios";

const products = ref([]);
const fetch = async () => {
  try {
    const { data } = await axios.get('https://b27d-197-43-133-208.ngrok-free.app/api/products');
    products.value = data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
useFetch(fetch);

useHead({
  title: 'Products List',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'List of products'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Products List'
    }
  ]
});


</script>

<style scoped>
.product {
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 10px;
}
</style>