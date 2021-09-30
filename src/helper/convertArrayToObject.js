import { checkIfEmptyArray } from "./check_array_emty";

export const convertArrayToObject = (array, key) => {
	if (!checkIfEmptyArray(array)) {
        return { }
      }
      const obj = { }
      array.forEach((item) => obj[getValue(key, item)] = item)
    
      return obj
};

const getValue = (keys, obj) => {
    const splitedKeys = keys.split('.')
  
    return splitedKeys.reduce((accumulator, currentValue) => {
      return accumulator[currentValue]
    }, obj)
  }
  