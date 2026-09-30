import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const BASE_URL = 'https://api-contatos-auth-04-09-25.onrender.com';
const TOKEN_KEY = 'token';

const api = axios.create({ baseURL: BASE_URL });

async function saveToken(token: string) {
  if (Platform.OS === 'web') {
    window.localStorage.setItem(TOKEN_KEY, token);
    return;
  }

  await SecureStore.setItemAsync(TOKEN_KEY, token);
}

async function readToken() {
  if (Platform.OS === 'web') {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  return SecureStore.getItemAsync(TOKEN_KEY);
}

async function removeToken() {
  if (Platform.OS === 'web') {
    window.localStorage.removeItem(TOKEN_KEY);
    return;
  }

  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function setAuthToken(token: string) {
  await saveToken(token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function loadAuthToken() {
  const token = await readToken();
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return token;
}

export async function clearAuthToken() {
  await removeToken();
  delete api.defaults.headers.common['Authorization'];
}

export function getImageUrl(fileId?: string) {
  return fileId ? `${BASE_URL}/upload/${fileId}` : undefined;
}

export default api;