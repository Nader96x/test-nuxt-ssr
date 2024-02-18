<script setup lang="ts">

import { ref, onMounted } from 'vue';
import axios from "axios";
import {useAsyncData} from "#app";

const product = ref(null);

const fetchProduct = async () => {
  const route = useRoute();

  let product_id = null;
  if (route.query.id) {
    product_id = route.query.id;
  }
  if(process.server)
    console.log('product_id',product_id, route);

  const { data } = await axios.get(`https://b27d-197-43-133-208.ngrok-free.app/api/products/${product_id}`);
  product.value = data;
}

useAsyncData(fetchProduct);

useHead(()=>({
  title: `Product ${product?.value?.name} Single`,
  meta: [
    {
      name: 'description',
      content: `${product?.value?.description}`
    },
    {
      property: 'og:title',
      content: `Product ${product?.value?.name} Single`
    }
  ]
}));
// useHead(() => ({
//   title: product.value ? `Product ${product.value.name} Single` : 'Loading product...',
//   meta: [
//     {
//       name: 'description',
//       content: product.value ? product.value.description : 'Single product description',
//     },
//     {
//       property: 'og:title',
//       content: product.value ? `Product ${product.value.name} Single` : 'Product Single',
//     },
//   ],
// }));



</script>

<template>
  <div>
    <h1>Product Single</h1>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <!-- Add more product details as needed -->
    </div>
    <button @click="fetchProduct">Get Product</button>
  </div>

</template>

<style scoped>

</style>