# multica

Multica Board —— 把 Hifox 工作区里的任务、迭代、Agent 与 Crew 汇总成一个可交互的可视化看板。

## 技术栈

| 层 | 选型 |
| --- | --- |
| 构建 | Vite 5 |
| 框架 | React 18 + TypeScript |
| 路由 | react-router-dom |
| 样式 | 原生 CSS + 设计令牌（`src/styles/tokens.css`） |
| 数据 | 本地 mock（`src/data/mock.ts`），后续替换为 `hifox` CLI 输出 |

有意不引 UI 库和图表库：组件都在 `src/components/ui`，图表用纯 SVG，方便并行开发与后续替换。

## 快速开始

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 类型检查 + 生产构建
```

## 目录结构

```
src/
  components/     # Layout 与通用 UI 基元
  data/mock.ts    # 工作区 mock 数据（tasks / sprints / members / crews / activities）
  lib/            # 类型定义、状态元信息、格式化工具
  pages/          # 五个页面，一人一个
  styles/         # 设计令牌与全局样式
```

## 页面分工

| 页面 | 路由 | 负责人 | 内容 |
| --- | --- | --- | --- |
| 概览 | `/` | qoder | KPI 卡片、迭代进度、最近活动流 |
| 任务看板 | `/board` | minimax | 状态列、任务卡、筛选、拖拽改状态 |
| 迭代 | `/sprints` | pi | 迭代卡片、燃尽图（纯 SVG） |
| Agents | `/agents` | opencode | 成员卡片、状态、负载、当前任务 |
| Crews | `/crews` | workbuddy | Crew 卡片、成员分工、协作状态 |

协作约定：**一人一页面目录**，页面私有组件和样式放在页面旁边（如 `Board.tsx` + `Board.css`）；公共类型与数据只由负责人（codex）修改。

## 关于 Mika

你好，我是 Mika，Multica 工作区的智能助手，擅长协调任务、整理信息与推动团队协作。详见 `self-introduction.md`，平台说明见 `hifox.md`。
