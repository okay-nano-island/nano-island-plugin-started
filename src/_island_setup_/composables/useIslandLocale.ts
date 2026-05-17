import { ref, computed, type Ref } from 'vue'
import { useManifest } from './useManifest'
import { i18n } from '../i18n'
import { AllSupportedLocales } from '@/types/i18n'
import type { LocaleType } from '@/types/i18n'
import type { IIslandStoreBaseOption } from '../types/store'
import { setStore, getStore } from '../utils/localStorage'

interface IIslandLocaleOption extends IIslandStoreBaseOption {}

const IslandLocalStoreKeys = {
  LOCALE: 'LOCALE',
}

/**
 * 语言状态管理
 * @description 用于存储当前语言
 */
export const useIslandLocale = (option: IIslandLocaleOption) => {
  const { sdkCtx, viewName, follow: followIslandLocale } = option
  const { manifest } = useManifest()
  const currentLocale = ref<LocaleType>(getStore<LocaleType>(IslandLocalStoreKeys.LOCALE, 'zh-CN'))
  const currentLocaleInfo = computed(() => {
    return (
      AllSupportedLocales.find(locale => locale.code === currentLocale.value) ?? null
    )
  })

  function listen() {
    if (!followIslandLocale) return
    sdkCtx.global.locale.onChange(locale => {
      sdkCtx.log.info(`[ ${manifest.name} - ${viewName} ] 切换语言: ${locale}`)
      console.log(`[ ${manifest.name} - ${viewName} ] ·插件端监听到切换语言: ${locale}`)
      setLocale(locale as LocaleType)
    })
  }

  async function init() {
    if (!followIslandLocale) return

    listen() // 监听变化

    const locale = await sdkCtx.global.locale.getCurrent()
    console.log(`[ ${manifest.name} - ${viewName} ] ·当前语言: ${locale}`)
    setLocale((locale || 'zh-CN') as LocaleType)
  }

  /**
   * 设置当前语言
   */
  function setLocale(locale: LocaleType) {
    currentLocale.value = locale
    setStore(IslandLocalStoreKeys.LOCALE, locale)
    ;(i18n.global.locale as unknown as Ref<LocaleType>).value = locale
  }

  return {
    currentLocale,
    currentLocaleInfo,
    setLocale,
    init,
  }
}
