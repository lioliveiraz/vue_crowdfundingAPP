import Card from '../../../src/components/Card/Card.vue';
import { shallowMount, mount } from '@vue/test-utils';

describe("Card component", () => {
    let wrapper, project;
    describe("shallow component", () => {
        beforeEach(async () => {
            project = {
                image: "placeholder",
                creator: "creator",
                name: 'name',
                date: "date"
            };

            wrapper = await shallowMount(Card, {
                propsData: { project },
            });
        });
        it("should render  correctly", () => {
            expect(wrapper.find('h4')).toBeTruthy();
            expect(wrapper.find('img')).toBeTruthy();
            expect(wrapper.find('p')).toBeTruthy();
            expect(wrapper.findAll('p').length).toEqual(2);

        });
        it("should receive props correctly", () => {
            const img = wrapper.find('img');
            expect(wrapper.props()).toEqual({ project });
            expect(img.element.alt).toEqual(project.name);

        });

    });


});

