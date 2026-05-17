/**
 * 语言类型
 */
export type LocaleType = 'zh-CN' | 'en-US'

export type MessageSchema = {
  [key: string]: any
}

/**
 * 语言信息
 */
export interface LocaleInfo {
  code: LocaleType
  name: string
  nativeName: string
}

/**
 * 所有支持的语言
 */
export const AllSupportedLocales: LocaleInfo[] = [
  { code: 'zh-CN', name: '中文', nativeName: '中文' },
  { code: 'en-US', name: 'English', nativeName: 'English' },
]
