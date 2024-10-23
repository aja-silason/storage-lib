Here are the instructions to use this lib



How to implements: 

ex:
`
import {getStorageData, setStorageData, removeStorageData} from "./index";

setStorageData("MyKey", "MyValue");

const getValue = getStorageData("MyKey");

console.log("result: ", getValue);

removeStorageData("MyKey");
`

to set some item in localStorage you must use the `setStorageData` function and inside that function use 2 props they are first to name of the key and second values

to get/take de data in localStorage you must use the function `getStorageData` anda de props use the key that you use bofere to set values.

To remove the item you must use the function `removeStorageData` with the props that you use to set values in localStorage.

Anania Augusto

storage-lib - 2024