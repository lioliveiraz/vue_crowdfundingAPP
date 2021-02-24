import api from '../../api/imgurApi/requests';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token'),
    username: window.localStorage.getItem('username')

};
const getters = {
    isLoggedIn: state => !!state.token

};


const actions = {
    logout: ({ commit }) => {
        window.localStorage.removeItem('imgur_token');
        window.localStorage.removeItem('username');

        commit('setToken', null);
        commit('setUserName', null);

    },
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {

        const parsedUrl = qs.parse(hash.replace('#', ""));
        parsedUrl.access_token;
        const username = parsedUrl.account_username;
        const token = parsedUrl.access_token;
        commit('setToken', token);
        window.localStorage.setItem('imgur_token', token);
        commit('setUserName', username);
        window.localStorage.setItem('username', username);


    }

};
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
    setUserName: (state, username) => {
        state.username = username;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};