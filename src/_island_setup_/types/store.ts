import type { ContextAPI } from '@nano-island/types'

export { ContextAPI }

export interface IIslandStoreBaseOption {
  /** SDK上下文  */
  sdkCtx: ContextAPI
  /** 视图名称 */
  viewName: string
  /** 是否跟随主应用变化 */
  follow: boolean
}
