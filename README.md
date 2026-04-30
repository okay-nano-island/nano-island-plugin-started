# Nano Island 插件模板

一个 Nano Island 插件模板，使用 Vue 3 + TypeScript 开发。

## 快速开始

### 环境要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖
```bash
pnpm install
```

### 开发命令
```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 类型检查
pnpm type-check
```

## 项目结构

```
.
├── manifest.json              # 插件清单（必需）
├── vite.config.ts            # Vite配置
├── tsconfig.json             # TypeScript配置
├── package.json              # 项目配置
├── src/
│   ├── main.ts               # 插件入口文件
│   ├── regular/
│   │   └── Regular.vue       # 胶囊模式组件
│   ├── expanded/
│   │   └── Expanded.vue     # 展开模式组件
│   ├── card/
│   │   └── Card.vue         # 常驻卡片组件
│   ├── settings/
│   │   └── Settings.vue     # 设置页面组件
│   └── menu/
│       └── MainMenu.vue      # 菜单组件
└── dist/                   # 构建产物
```

## manifest.json 详解

插件配置文件，定义插件的基本信息和接口：

```json
{
  "id": "{{PLUGIN_ID}}",
  "name": "{{PLUGIN_NAME}}",
  "version": "1.0.0",
  "description": "这是一个灵动岛插件",
  "author": "插件作者",
  "interfaces": {
    "regular": {
      "type": "vue",
      "entry": "regular.js",
      "defaultSize": { "width": 120, "height": 36 }
    },
    "expanded": {
      "type": "vue",
      "entry": "expanded.js",
      "defaultSize": { "width": 400, "height": 300 }
    },
    "card": {
      "type": "vue",
      "entry": "card.js",
      "gridSize": { "w": 2, "h": 1 }
    },
    "settings": {
      "type": "vue",
      "entry": "settings.js",
      "title": "插件设置"
    },
    "menu": [
      {
        "id": "main",
        "label": "{{PLUGIN_NAME}}",
        "icon": "📦"
      }
    ]
  }
}
```

## 开发指南

### 1. 插件入口 (main.ts)

```typescript
import { defineIslandPlugin, type IslandContext } from '@nano-island/sdk'
import RegularComponent from './regular/Regular.vue'
import ExpandedComponent from './expanded/Expanded.vue'
import CardComponent from './card/Card.vue'
import SettingsComponent from './settings/Settings.vue'
import MainMenuComponent from './menu/MainMenu.vue'

export default defineIslandPlugin((ctx: IslandContext) => {
  // 注册胶囊模式
  ctx.registerRegular({
    component: RegularComponent,
    defaultProps: { message: 'Hello Island' },
    styles: ''
  })

  // 注册展开模式
  ctx.registerExpanded({
    component: ExpandedComponent,
    defaultProps: {},
    styles: ''
  })

  // 注册卡片模式
  ctx.registerCard({
    component: CardComponent,
    defaultProps: {},
    styles: ''
  })

  // 注册设置页面
  ctx.registerSettings({
    component: SettingsComponent,
    defaultProps: {},
    styles: ''
  })

  // 注册菜单
  ctx.registerMenu('main', {
    component: MainMenuComponent,
    defaultProps: {},
    styles: '',
    label: '{{PLUGIN_NAME}}',
    icon: '📦'
  })

  // 生命周期钩子
  ctx.onMount = () => {
    console.log('插件已注册')
  }

  ctx.onEnable = () => {
    console.log('插件已启用')
  }

  ctx.onDisable = () => {
    console.log('插件已禁用')
  }
})
```

### 2. 使用 Tailwind CSS

所有组件使用 Tailwind CSS 4.0 进行样式开发：

```vue
<style scoped>
@reference "tailwindcss";

.container {
  @apply flex items-center justify-center h-full;
  @apply text-white font-semibold;
  @apply rounded-full px-4 py-2;
}
</style>
```

### 3. 数据存储

```typescript
import { useStorage } from '@nano-island/sdk'

const storage = useStorage('{{PLUGIN_ID}}')

// 保存数据
await storage.set('key', 'value')

// 读取数据
const value = await storage.get('key')
```

### 4. UI 控制

```typescript
// 请求显示胶囊模式
await ctx.ui.requestRegularShow({
  strategy: 'queue',
  duration: 5000
})

// 显示展开模式
await ctx.ui.requestExpandedShow()

// 显示设置
await ctx.ui.showSettings()
```

## 发布流程

1. **构建**
```bash
pnpm build
```

2. **验证构建产物**
```
dist/
├── main.js              # 主入口
├── regular.js          # 胶囊模式
├── expanded.js         # 展开模式
├── card.js            # 卡片模式
├── settings.js        # 设置
├── menu.js            # 菜单
├── manifest.json      # 插件清单
└── assets/            # 样式资源
```

3. **在主程序中加载**
   - 打开灵动岛主程序
   - 进入设置 → 开发者模式
   - 开启"允许加载本地插件"
   - 输入插件路径或选择插件文件夹

## 常见问题

| 问题 | 解决方案 |
|------|----------|
| 样式不生效 | 检查 `<style scoped>`，确认 Tailwind 类名正确 |
| 组件不更新 | 使用 `defaultProps` 或在生命周期中更新数据 |
| 类型错误 | 运行 `pnpm type-check` 检查类型 |
| 构建失败 | 确保所有依赖已安装，检查 vite.config.ts |

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具
- **Tailwind CSS 4.0** - 实用优先的 CSS 框架
- **@nano-island/sdk** - 灵动岛 SDK

## 更多文档

- [插件开发文档](https://nano-island.xiaoxiaomo.cn/docs)
- [SDK API 参考](https://nano-island.xiaoxiaomo.cn/docs-sdk)
- [示例插件](https://github.com/okay-nano-island/nano-island-plugins)
