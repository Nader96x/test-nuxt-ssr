export default async function ({ store, $axios }) {
    if (!store.state.products.length) {
        const { data: products } = await $axios.get('http://backend.test/api/products');
        store.commit('products/setProducts', products);
    }
}