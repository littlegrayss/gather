import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isModal: false,
    // messageType: 'hide',
}

const mutations = {
    on(state) {
        state.isModal = true;
    },
    off(state) {
        state.isModal = false;
    },
    // yes(state) {
    //     state.messageType = 'yes';
    // },
    // no(state) {
    //     state.messageType = 'no';
    // },
    // end(state) {
    //     state.messageType = 'hide';
    // },

}

export default new Vuex.Store({
    state,
    mutations 
});