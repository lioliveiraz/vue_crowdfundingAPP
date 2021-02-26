import Home from '../../../src/views/Home.vue';
import { shallowMount } from '@vue/test-utils';




describe('Home page', () => {
    let wrapper;
    describe("shallow", () => {

        beforeEach(() => {

            wrapper = shallowMount(Home);
        });

        describe("renders correctly", () => {
            it("should renders correctly", () => {
                const p = wrapper.find('p');
                const button = wrapper.find('button');
                expect(p).toBeTruthy();
                expect(button).toBeTruthy();
                expect(wrapper).toMatchSnapshot();
            });
            it("should data correctly", () => {

                expect(Home.data().filteredProjects).toBeFalsy();
                expect(Home.data().projects).toBeFalsy();

            });
        });


    });
}); 