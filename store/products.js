export const state = () => ({
    list: []
})

export const mutations = {
    add(state, product) {
        state.list.push(product)
    },
    remove(state, { product }) {
        state.list.splice(state.list.indexOf(product), 1)
    },
    update(state, product) {
        let idx = state.list.findIndex((p) => p.id === product.id);
        if (idx !== -1) {
            state.list[idx] = product;
        }
    }
}
