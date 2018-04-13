import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isModal: false,
    messageType: 'hide',
    userId: ''
}

const mutations = {
    on(state) {
        state.isModal = true;
    },
    off(state) {
        state.isModal = false;
    },
    yes(state) {
        state.messageType = 'yes';
    },
    no(state) {
        state.messageType = 'no';
    },
    hide(state) {
        state.messageType = 'hide';
    },
    getUserId(state,str) {
        state.userId = str;
    }
}

export default new Vuex.Store({
    state,
    mutations 
});