# {{PLUGIN_NAME}}

{{PLUGIN_DESCRIPTION}}

## 功能特性

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 启动开发服务器（监听文件变化）
pnpm dev

# 构建生产版本
pnpm build

# 类型检查
pnpm type-check
```

## 项目结构

待补充

## manifest.json 详解

待补充

## 开发指南

### 1. 插件入口 (main.ts)

待补充

### 2. 组件类型

#### Regular（紧凑视图）

灵动岛胶囊模式下显示的组件：

待补充

#### Expanded（展开视图）

点击展开时显示的完整视图：

待补充

#### Resident（常驻卡片）

Dashboard 上的常驻卡片组件：
待补充

#### Settings（设置弹窗）

插件设置界面：
待补充

#### Menu（菜单面板）

侧边栏或下拉菜单中的面板：
待补充

### 3. 使用 TailwindCSS 4.x

待补充

### 4. UI 控制

待补充

### 5. 数据存储

待补充

### 6. 事件通信

待补充

## 发布流程

### 1. 构建插件

```bash
pnpm build
```

### 2. 验证构建产物

待补充

### 3. 在主程序中加载

待补充

## 在宿主中加载插件

### 开发模式

待补充

### 生产模式

待补充

## 常见问题

待补充

## 技术栈

- **Vue** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具
- **TailwindCSS 4.x** - 实用优先的 CSS 框架
- **@nano-island/sdk** - 灵动岛插件 SDK

## API 参考

更多 API 和详细文档请参考：

- [插件开发指南](../../docs/PLUGIN_GUIDE.md)
- [@nano-island/sdk API](https://nano-island.xiaoxiaomo.cn/docs-sdk)

## License

MIT
