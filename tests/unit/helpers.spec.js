import { findMaxValueToDonate, isElementInString, deleteRepeatedElementArr, transformDateTypeInString } from '../../src/helper/helperFunc';
import { validateInput } from './../../src/helper/validation';

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

    describe("deleteRepeatedElementArr func", () => {
        const arr = [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2];
        const arrUnique = [1, 2, 3];
        it('return array with unique data', () => {
            expect(deleteRepeatedElementArr(arr)).toEqual([1, 2]);
        });
        it('return the same array', () => {
            expect(deleteRepeatedElementArr(arrUnique)).toEqual(arrUnique);
        });


    });
    describe("transformDateTypeInString func", () => {
        const date = new Date();
        const month = date.getMonth().toString();
        const year = date.getFullYear().toString();
        const day = date.getDate().toString();

        it('return string with the current month', () => {
            expect(transformDateTypeInString()).toMatch(month);
        });
        it('return string with the current year', () => {
            expect(transformDateTypeInString()).toMatch(year);
        });
        it('return string with the current day', () => {
            expect(transformDateTypeInString()).toMatch(day);
        });

    });

    describe("validateInput fun", () => {
        let mockedInputs, errorObj;

        describe("props are correctly passed", () => {
            mockedInputs = {
                name: 'string',
                goal: 0
            };
            errorObj = {};
            it('returns an object with name and goal key', () => {
                expect(validateInput(mockedInputs)).toEqual(expect.objectContaining(errorObj));
            });
        });
        describe("props are NOT correctly passed", () => {
            mockedInputs = {
                name: "1",
                goal: 1
            };
            errorObj = {
                name: expect.any(String),
                goal: expect.any(String)

            };
            it('returns an object with name and goal key', () => {
                expect(validateInput(mockedInputs)).toEqual(expect.objectContaining(errorObj));
            });
        });

    });
});

