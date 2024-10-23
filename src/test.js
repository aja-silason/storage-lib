"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
(0, index_1.setStorageData)("MyKey", "MyValue");
const getValue = (0, index_1.getStorageData)("MyKey");
console.log("result: ", getValue);
(0, index_1.removeStorageData)("MyKey");
