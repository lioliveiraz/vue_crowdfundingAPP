
export const findMaxVallueDonation = (donated, goal) => {
    return goal - donated;
};

export const findElementInString = (el1, el2) => {
    return el1.toLowerCase().includes(el2.toLowerCase());
};

export const deleteRepeatedElementArr = (array) => {
    return array.filter((v, i) => array.indexOf(v) === i);
};

export const handleDate = () => {
    return `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`;


};

