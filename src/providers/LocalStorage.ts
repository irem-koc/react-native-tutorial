import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

const setItem = (key: string, value: string) => {
  storage.set(key, value);
};

const getItem = (key: string) => {
  const value = storage.getString(key);

  return value;
};

const deleteItem = (key: string) => {
  storage.delete(key);
};

const clearAll = () => {
  storage.clearAll();
};

export default {
  setItem,
  getItem,
  deleteItem,
  clearAll,
};
