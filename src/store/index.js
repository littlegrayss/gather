import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isModal: false,
    modalText: '',
    messageType: 'hide',
    userId: ''
}

const mutations = {
    on(state,str) {
        state.isModal = true;
        state.modalText = str;
    },
    off(state) {
        state.isModal = false;
        state.modalText = '';
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