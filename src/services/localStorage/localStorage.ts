export const getLocalStorageValue = (key: string) => localStorage.getItem(key);

export const setLocalStorageValue = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const removeLocalStorageValue = (key: string) =>
  localStorage.removeItem(key);
