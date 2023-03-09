// Write your solution in this file!
let employee={
    name:"job",
    streetAddress:"nairobi",
}

//cloning using spread operator then change the value
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj={...obj};//clone
    newObj[key]=value;//change value
    return newObj;
}
const newEmployee1 = updateEmployeeWithKeyAndValue(employee,"name","brian");

//changing value
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    // const newObj={...obj};//clone
    obj[key]=value;//change value
    return obj;
}
const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","kevin");

//spread operator
function deleteFromEmployeeByKey(obj, key) {
    const { [key]: deleted, ...remove } = obj;
    return remove;
  }

  const newEmployee3 = deleteFromEmployeeByKey(employee ,"streetAddress");

//delete operator
  function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
  }

  const newEmployee4 = deleteFromEmployeeByKey(employee ,"streetAddress");
