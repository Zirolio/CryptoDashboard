export const saveToStorage = (key: string, data: unknown) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const loadFromStorage = <T>(key: string): T | undefined => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
}