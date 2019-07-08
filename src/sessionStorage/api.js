const setStorage = (key,value) =>{
    sessionStorage.setItem(key, value);
}

const getStorage = (key)=>{
    return sessionStorage.getItem(key);
}

export { setStorage, getStorage }