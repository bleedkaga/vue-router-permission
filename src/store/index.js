
import Vuex from 'vuex'
import {asyncRoutes} from "../router/index.js";

const store = new Vuex.Store({
    state: {
        routes: []
    },
    getters: {
        addRoutes: state => state.routes
    },
    mutations: {
        setRoutes(state, payload){
            state.routes = payload;
        }
    },
    actions: {
        GenerateRoutes({ commit }){
            return new Promise((resolve) => {
                commit('setRoutes', asyncRoutes)
                resolve()
            })
        }
    }
})

export default store;