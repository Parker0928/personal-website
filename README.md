# Parker Personal Website

一个基于 `React + TypeScript + Vite + Tailwind CSS` 构建的个人作品集网站，包含首页、项目、经验、联系等模块，支持中英文切换与深浅色主题。

## 项目启动

### 环境要求

- Node.js 18+（建议使用最新 LTS）
- npm 9+

### 本地运行

1. 安装依赖  
   `npm install`
2. 启动开发环境  
   `npm run dev`
3. 浏览器访问  
   `http://localhost:3000`

## 常用命令

- `npm run dev`：启动本地开发服务（Vite）
- `npm run build`：构建生产包到 `dist/`
- `npm run preview`：预览生产构建结果
- `npm run lint`：执行 TypeScript 类型检查（`tsc --noEmit`）

## 项目结构

```text
.
├── public/                 # 静态资源（图片、视频、favicon、SEO 文件等）
├── src/
│   ├── components/         # 通用组件（Layout、ScrollReveal、ParallaxImage 等）
│   ├── pages/              # 页面模块（Home / Projects / Experience / Contact）
│   ├── i18n.ts             # 中英文文案与 i18next 配置
│   └── main.tsx            # 应用入口
├── index.html              # HTML 模板与 head 元信息
└── vite.config.ts          # Vite 配置
```

## 技术栈与使用

- **框架**：React 19 + TypeScript
- **构建工具**：Vite 6
- **样式**：Tailwind CSS 4（配合自定义 neo-brutalist 样式类）
- **动画**：Motion（`motion/react`）
- **路由**：React Router
- **国际化**：i18next + react-i18next（中/英文）
- **图标**：lucide-react + 自定义 SVG（X 图标等）

## 部署建议

构建后会在 `dist/` 产物目录生成静态文件，可部署到 Vercel、Netlify、GitHub Pages 或任意静态托管平台。
