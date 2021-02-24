import { findMaxValueToDonate, isElementInString, deleteRepeatedElementArr, transformDateTypeInString } from '../../src/helper/helperFunc';

describe("helpers", () => {
    describe("findMaxValue func", () => {
        it('return the right value', () => {

            expect(findMaxValueToDonate(1, 2)).toBe(1);
        });
        it('should return number', () => {

            expect(findMaxValueToDonate("1", "2")).toBe(1);
            expect(findMaxValueToDonate("string", "string")).toBeNaN();

        });
    });
    describe("isElementInString func", () => {
        const stringOne = "test";
        it('return a true value', () => {
            const stringTwo = "es";

            expect(isElementInString(stringOne, stringTwo)).toBeTruthy();
        });
        it('return a false value', () => {
            const stringTwo = "oak";

            expect(isElementInString(stringOne, stringTwo)).toBeFalsy();
        });

    });
});

