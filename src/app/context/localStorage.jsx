
export const LocalStorageActions = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    getItem: (key) => {
        const item = localStorage.getItem(key);
        return JSON.parse(item);
    },

    clearItem: (key) => {
        localStorage.removeItem(key);
    }
}