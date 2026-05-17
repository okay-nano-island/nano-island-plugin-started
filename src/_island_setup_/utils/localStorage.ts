const prefix = '_island_plugin_'

/**
 * 本地存储设置
 * @description 用于设置本地存储中的指定键的值
 * @param key 本地存储键
 * @param value 本地存储值
 */
export function setStore<T>(key: string, value: T) {
  localStorage.setItem(prefix + key, JSON.stringify(value))
}

/**
 * 本地存储获取
 * @description 用于从本地存储中获取指定键的值
 * @param key 本地存储键
 * @param defaultValue 默认值
 * @returns 本地存储值
 */
export function getStore<T>(key: string, defaultValue: T): T {
  const item = localStorage.getItem(prefix + key)
  if (!item) return defaultValue
  try {
    return JSON.parse(item) as T
  } catch (error) {
    return defaultValue
  }
}

/**
 * 本地存储移除
 * @description 用于从本地存储中移除指定键的值
 * @param key 本地存储键
 */
export function removeStore(key: string) {
  localStorage.removeItem(prefix + key)
}
