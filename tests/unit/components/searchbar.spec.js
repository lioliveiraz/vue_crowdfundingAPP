import { shallowMount, mount } from '@vue/test-utils';
import SearchBar from '../../../src/components/Filters/SearchBar.vue';

describe('SearchBar component', () => {
    let wrapper;

    describe('shallow SearchBar', () => {
        beforeEach(() => {
            wrapper = shallowMount(SearchBar);
        });
        it("should has data", () => {
            expect(typeof SearchBar.data).toBe('function');

        });
        it("component renders correctly", () => {
            expect(wrapper.find('input')).toBeTruthy();
            expect(wrapper.find('div')).toBeTruthy();
            expect(wrapper).toMatchSnapshot();
        });


    });
    describe('mount SearchBar', () => {
        beforeEach(() => {
            wrapper = mount(SearchBar);
        });
        it("should render data correctly", () => {
            expect(SearchBar.data().userInputSearchPjc).toEqual("");

        });
        it("should bind to input", async () => {
            const input = wrapper.find('input');
            await wrapper.setData({
                userInputSearchPjc: "value"
            });
            expect(input.element.value).toEqual("value");
        });
        it("should bind to data", async () => {
            const input = wrapper.find('input');
            input.element.value = "value";
            await input.trigger('input');

            expect(wrapper.vm.userInputSearchPjc).toEqual("value");
        });


    });
});