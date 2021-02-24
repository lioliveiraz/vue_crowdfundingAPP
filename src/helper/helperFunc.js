/**
 * @function findMaxValueToDonate
 * @param {number} donated 
 * @param {number} goal
 * @returns {number} 
 */

export const findMaxValueToDonate = (donated, goal) => {
    return goal - donated;
};

/**
 * @function isElementInString
 * @param {string} el1 
 * @param {string} el2 
 * @returns {boolean}
 */
export const isElementInString = (el1, el2) => {
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
 * @function transformDateTypeInString
 * @returns {string}
 */
export const transformDateTypeInString = () => {
    return `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`;


};

