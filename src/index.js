"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStorageData = setStorageData;
exports.getStorageData = getStorageData;
exports.removeStorageData = removeStorageData;
function setStorageData(key, value) {
    const valueToStringfy = JSON.stringify(value);
    localStorage.setItem(key, valueToStringfy);
}
function getStorageData(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : console.error("storage is empty please go verify");
}
function removeStorageData(key) {
    localStorage.removeItem(key);
}
