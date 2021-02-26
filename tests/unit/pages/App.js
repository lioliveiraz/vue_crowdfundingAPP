import App from '../../../src/App.vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';



const localVue = createLocalVue();
localVue.use(Vuex);
let store = new Vuex.Store({});

describe('Home page', () => {
    let wrapper, getters;
    describe("shallow", () => {

        beforeEach(() => {
            getters = {
                isToken: () => true
            };
            store = new Vuex.Store({
                getters
            });
            wrapper = shallowMount(Home, { store, localVue });
        });

    });
});