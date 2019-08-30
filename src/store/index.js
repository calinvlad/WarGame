import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from "vuex-persistedstate"

// Modules
import players from './modules/players';

Vue.use(Vuex);
export default new Vuex.Store({
    // plugins: [createPersistedState()],
    modules: {
        players
    },
    strict: true,
});
