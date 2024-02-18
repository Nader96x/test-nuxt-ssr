export const actions = {
    async nuxtServerInit({ commit }) {
        const { data: products } = await this.$axios.get('http://backend.test/api/products');
        commit('products/setProducts', products);
    }
}