import { ref, computed } from 'vue'
import { darkTheme, lightTheme } from 'naive-ui'
import { useManifest } from './useManifest'
import { setStore, getStore } from '../utils/localStorage'
import type { IIslandStoreBaseOption, ContextAPI } from '../types/store'
import type { GlobalThemeOverrides, GlobalTheme } from 'naive-ui'

interface IIslandThemeOption extends IIslandStoreBaseOption {}

const IslandLocalStoreKeys = {
  IS_DARK: 'IS_DARK',
}

/**
 * 主题管理
 * @description 用于存储当前主题模式和主题色彩
 */
export const useIslandTheme = (option: IIslandThemeOption) => {
  const { sdkCtx, viewName, follow: followIslandTheme } = option
  const { manifest } = useManifest()

  const isDark = ref(getStore<boolean>(IslandLocalStoreKeys.IS_DARK, false))

  const naiveTheme = computed<GlobalTheme>(() => {
    return isDark.value ? darkTheme : lightTheme
  })
  const themeOverrides = ref<GlobalThemeOverrides>({})

  function listen() {
    if (!followIslandTheme) return

    // 监听主题模式变化
    sdkCtx.global.themeMode.onChange(themeMode => {
      sdkCtx.log.info(
        `[ ${manifest.name} - ${viewName} ] 切换主题: ${themeMode.mode}`
      )
      setTheme(themeMode.isDark)
    })

    // 监听主题变化
    sdkCtx.global.theme.onChange(theme => {
      sdkCtx.log.info(
        `[ ${manifest.name} - ${viewName} ] 切换主题色彩: ${theme.naiveThemeOverrides}`
      )
      themeOverrides.value = theme.naiveThemeOverrides as GlobalThemeOverrides
    })
  }

  async function init() {
    if (!followIslandTheme) return

    listen() // 监听主题变化

    // 当前主题模式
    const themeMode = await sdkCtx.global.themeMode.getCurrent()
    setTheme(themeMode.isDark)
    // 当前主题
    const currentTheme = await sdkCtx.global.theme.getCurrent()
    themeOverrides.value = currentTheme.naiveThemeOverrides as GlobalThemeOverrides
  }

  /**
   * 设置当前主题模式
   */
  function setTheme(isDarkMode: boolean) {
    isDark.value = isDarkMode
    setStore(IslandLocalStoreKeys.IS_DARK, isDarkMode)
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  return {
    isDark,
    naiveTheme,
    themeOverrides,
    setTheme,
    init,
  }
}
