import { shallowMount } from '@vue/test-utils';
import Input from '../../../src/components/Form/Input.vue';

describe("input component", () => {
    let wrapper, attributeObj;
    describe("shallow", () => {
        beforeEach(() => {
            attributeObj = {
                name: "name",
                type: "type",
                placeholder: "placeholder"
            };

            wrapper = shallowMount(Input, {
                propsData: { attributeObj }
            });
        });

        it("should render correctly", () => {
            const label = wrapper.find('label');
            expect(wrapper.find('input')).toBeTruthy();
            expect(wrapper.find('label')).toBeTruthy();
            expect(wrapper).toMatchSnapshot();
            expect(label.text()).toBe(attributeObj.name);
        });
        it("should render data as an empty string", () => {
            expect(Input.data().currentValue).toEqual("");

        });

        it("should bind to input", async () => {
            const input = wrapper.find('input');
            await wrapper.setData({
                currentValue: "value"
            });
            expect(input.element.value).toEqual("value");
        });
        it("should bind to data", async () => {
            const input = wrapper.find('input');
            input.element.value = "value";
            await input.trigger('input');

            expect(wrapper.vm.currentValue).toEqual("value");
        });

    });

});