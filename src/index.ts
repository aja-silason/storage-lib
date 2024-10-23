
function setStorageData(key: string, value: string): void{

    const valueToStringfy = JSON.stringify(value);
    localStorage.setItem(key, valueToStringfy);

}

function getStorageData(key: string): any {

    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : console.error("storage is empty please go verify");

}

function removeStorageData(key: string): void {
    localStorage.removeItem(key);
}


export {setStorageData, getStorageData, removeStorageData}