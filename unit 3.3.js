// Задание 1
let printObject;
printObject = obj => {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
};
;

//Задание 2
let checkPropInObj;
checkPropInObj = (str, obj) => (str in obj);

//Задание 3
let createObjWithoutProto;
createObjWithoutProto = () => Object.create(null);