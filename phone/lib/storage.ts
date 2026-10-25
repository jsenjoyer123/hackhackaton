import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  VAULTS: 'diabase:vaults',
  ACTIVE_VAULT: 'diabase:activeVault',
  SETTINGS: 'diabase:settings',
  SETUP_COMPLETE: 'diabase:setupComplete',
  WORKSPACE: (vaultId: string) => `diabase:workspace:${vaultId}`,
  GITHUB_TOKEN: (vaultId: string) => `diabase:ghToken:${vaultId}`,
  GIT_TOKEN: (vaultId: string) => `diabase:gitToken:${vaultId}`,
};

export async function getItem<T>(key: string): Promise<T | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

export async function removeItem(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

export { KEYS };
