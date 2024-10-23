import {getStorageData, setStorageData, removeStorageData} from "./index";

setStorageData("MyKey", "MyValue");

const getValue = getStorageData("MyKey");

console.log("result: ", getValue);

removeStorageData("MyKey");
