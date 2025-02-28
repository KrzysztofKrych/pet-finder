export const getLocalStorageValue = (key: string): string | null =>
  localStorage.getItem(key);

export const setLocalStorageValue = (key: string, value: unknown): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const removeLocalStorageValue = (key: string): void =>
  localStorage.removeItem(key);

export const setLocalStorageValueWithExpiry = (
  key: string,
  value: unknown,
  ttl: number
): void => {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  setLocalStorageValue(key, item);
};

export const getLocalStorageValueWithExpiry = <T>(key: string): T | null => {
  const stringifyValue = getLocalStorageValue(key);
  if (!stringifyValue) {
    return null;
  }
  const value = JSON.parse(stringifyValue);
  const now = new Date().getTime();

  if (now > value.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return value.value as T;
};
