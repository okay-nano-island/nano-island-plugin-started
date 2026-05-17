import { createI18n } from 'vue-i18n'
import type { I18nOptions } from 'vue-i18n'
import type { MessageSchema } from '@/types/i18n'

// 加载所有语言文件
const loadLocaleMessages = async (): Promise<MessageSchema> => {
  const modules = import.meta.glob('@/locales/*.json', { eager: false })

  const messages: MessageSchema = {}

  // 并行加载所有 JSON 文件
  const loadPromises = Object.entries(modules).map(async ([path, loadModule]) => {
    const module = (await loadModule()) as { default: any }
    const fileName = path.split('/').pop()?.replace('.json', '') || ''
    // 将文件名作为命名空间
    messages[fileName] = module.default
  })

  await Promise.all(loadPromises)

  return messages
}

async function createI18nInstance() {
  // 加载语言文件 
  const messages = await loadLocaleMessages()

  const options: I18nOptions = {
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    messages,
  }
  return createI18n(options)
}

export const i18n = await createI18nInstance()

export default i18n
