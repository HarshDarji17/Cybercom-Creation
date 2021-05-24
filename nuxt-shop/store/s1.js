const createStore = () => {
    return new Vuex.Store({
        state: function() {
            return {
                products: [
                    {user: 'Harsh', shop:'ABC', price: 100, name: 'Tomato', quantity: 1, unit: '2', date: '2021/4/1 午前11時30分'},
                    {user: 'Abc', shop:'XYZ', price: 50, name: 'Grape', quantity: 2, unit: '3', date: '2021年4月2日 午後12時30分'},
                    {user: 'Suman', shop:'PQR', price: 30, name: 'Apple', quantity: 3, unit: '3', date: '2021年4月3日 午後13時30分'},
                ],
                fruits: [
                    'ALL',
                    'Apple',
                    'Strawberry',
                    'Grape',
                ],
                vegetables: [
                    'ALL',
                    'Cucumber',
                    'Onion',
                ],
                filterWord: {name: 'ALL'},
                filters: []
            }
        },
        getters: {
            getProducts: function(state) {
                if(state.filterWord.name === 'ALL') {
                    return state.products;
                } else {
                    const result = state.products.filter(function(value)  {
                        return value.name === state.filterWord.name;
                    });
                    result.forEach(product => {
                        state.filters.push(product);
                    })
                    return state.filters;
                }
        },
            getFruits: function(state) {
                return state.fruits;
            },
            getVegetables: function(state) {
                return state.vegetables;
            }
        },
        mutations: {
            filter(state, value) {
                state.filterWord.name = value;
            }
        },
        actions: {
            filter({ commit }, value) {
                commit('filter', value);
            }
        }
    })
}

export default createStore;