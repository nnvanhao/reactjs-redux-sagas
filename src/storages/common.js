const handleSetItemLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const handleGetItemLocalStorage = (key) => {
    return localStorage.getItem(key);
}

const handleRemoveItemLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export {
    handleSetItemLocalStorage,
    handleGetItemLocalStorage,
    handleRemoveItemLocalStorage,
}