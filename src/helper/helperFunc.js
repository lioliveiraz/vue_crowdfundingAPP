/**
import { deleteRepeatedElementArr } from './helperFunc';
 * @function findMaxValueDonation
 * @param {number} donated 
 * @param {number} goal
 * @returns {number} 
 */

export const findMaxValueDonation = (donated, goal) => {
    return goal - donated;
};

/**
 * @function findElementInString
 * @param {string} el1 
 * @param {string} el2 
 * @returns {array}
 */
export const findElementInString = (el1, el2) => {
    return el1.toLowerCase().includes(el2.toLowerCase());
};
/**
 * @function deleteRepeatedElementArr
 * @param {array} array 
 * @returns {array}
 */
export const deleteRepeatedElementArr = (array) => {
    return array.filter((v, i) => array.indexOf(v) === i);
};

/**
 * @function handleDate
 * @returns {string}
 */
export const handleDate = () => {
    return `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`;


};

