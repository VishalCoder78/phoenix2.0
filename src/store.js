import Vuex from "vuex"

const store = new Vuex.Store({
    state: {
        isUserListVisible: false,
    },  

    mutations: {
        toggleUserList: (state) => {
            state.isUserListVisible = !state.isUserListVisible;
        }

    },

    getters: {
        isUserListVisible: (state) => {
            return state.isUserListVisible;
        },

        // toggleUserList: (state) => {
        //     return state.toggleUserList;
        // },
    }
});

export default store;