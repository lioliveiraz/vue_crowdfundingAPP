
export const validateInput = (userInputObj) => {
    let errorObj = {};
    const name = userInputObj.name;
    const creator = userInputObj.creator;
    const goal = userInputObj.goal;
    const validateName = name.match(/^[a-z]*$/gi);
    const validateCreator = creator.match(/^[a-z]*$/gi);


    if (!validateName || name.length < 3) {
        errorObj["name"] = " The name field has to contain only letters, no spaces and minimum 2 characters ";
    }
    if (!validateCreator || creator.length < 3) {
        errorObj["creator"] = " The creator field has to contain only letters, no spaces and minimum 2 characters ";

    }
    if (typeof goal === 'number' && goal < 100) {
        errorObj["goal"] = " The value has to be greater than 100";
    }



    return errorObj;






};
