# 贡献指南

本仓库是纯文档仓库，无需构建或安装。本文件约定文档的写法与协作流程，目的是让多人（包括 AI Agent）并行写作时风格统一、互不覆盖。

> 事实类内容以仓库现有文档和 `hifox --help` 为准；拿不准的写 `> 待核实`，不要臆造参数或机制。

## 文档规范

### 文件命名

- 使用 `.md` 扩展名，正文统一 UTF-8 编码。
- 根目录的惯例文件用大写：`README.md`、`CONTRIBUTING.md`。
- 其余文件用小写英文 + 连字符（kebab-case）：`self-introduction.md`、`cli-reference.md`、`workflows.md`。
- 子目录用小写英文，如 `docs/`；路径层级不超过必要深度。
- 文件名应能望文生义，避免使用 `new`、`final`、`v2` 等临时词。

### 标题层级

- 每个文件有且仅有一个一级标题 `#`，与文件主题一致。
- 用 `##` 划分主要章节，`###` 划分小节；不再往下细分时改用列表。
- 不跳级（不要从 `#` 直接到 `###`）。
- 标题简洁、不加结尾句号；中文标题与正文之间空一行。
- 聊天/评论里回复时另按对话规范，避免 H1/H2（那不是本仓库文档的约定）。

### 术语表

下表是本仓库术语的唯一基准，写作时保持一致。首次出现可用「中文（English）」，之后统一用中文，除非上下文需要区分英文原词。

| 中文 | English | 说明 |
| --- | --- | --- |
| 任务 | Task | 核心工作项，类似 Jira issue |
| 任务类型 | Task type | 可自定义，含自定义状态，以当前 Space 为准 |
| 迭代 | Sprint | 支持 Jira 模式或 Linear Cycle 模式，取决于 Space 设置 |
| 专项 | Project | 类似 Jira Epic，汇总一组相关任务 |
| 视图 | View | 已保存的任务列表配置 |
| 空间 | Space | 任务与配置的作用域 |
| 智能体 | Agent | 可自定义的 AI teammate |
| 协作组 | Crew | 多个 Agent 组成的协作团队 |
| 计算环境 | Computer | Agent 执行任务所在的机器 |
| 运行时 | Runtime | Agent 在 Computer 上执行任务的环境 |
| 执行 | Execution | Agent 通过 Runtime 在 Computer 上完成工作 |
| 对话 | Conversation | 可在任务内发起（关联任务），也可独立发起 |
| 提及 | mention | 在对话/评论中唤起成员、Agent 或 Crew |
| 自动化 | Automation | 由触发器驱动的自动流程 |
| 拉取请求 | PR / Pull Request | 分支合并到主线的提议 |

> 表中「以当前 Space 为准」「取决于 Space 设置」等表述沿用现有 `hifox.md`；更细的机制若无法从仓库确认，标注 `> 待核实`。

### 链接

- 仓库内互链一律用相对路径，并写明锚点文字：`[CLI 速查](./docs/cli-reference.md)`、`[hifox.md](./hifox.md)`。
- 不要写本机绝对路径，也不要写只有在某台机器上才成立的路径。
- 外部资料用完整 `https://` URL，链接文字描述目标而非贴裸 URL。
- 指向 HiFox 任务时用可点击徽章格式 `[TASK-123](mention://task/<task-id>)`；此类链接仅作引用，不会触发通知。
- 需要他人采取动作时才用 `mention://agent/...` 或 `mention://crew/...`，避免无意义的往返唤起。

### mermaid 写法

- 流程图统一放在 ` ```mermaid ` 代码围栏里；一张图只表达一个主题，节点尽量不超过 10 个。
- 带标签的连线写成 `A -->|标签| B`，不要写成 `A --标签| B`。
- 状态机用 `stateDiagram-v2`，转换上标注事件或概率。
- 图是正文的补充而非复制：正文先把事情说清楚，图只呈现结构/流程，不在围栏里重复大段文字。
- 配色只用 `currentColor` 或 `var(--fg|--muted|--border|--surface|--accent|--success|--warning|--error|--c1...--c6)`，不画背景；禁用脚本、动画与 `foreignObject`。

## 协作流程

### 并行边界

- 采用「一人一文件、互不改他人文件」的切分：每位贡献者只新建或修改自己认领的文件。
- `README.md` 的索引与术语统一由收口人最后处理；其他人不要改 `README.md`。
- 不直接把改动合入 `main`，由收口人统一汇总、评审后合并。

### 分支约定

- 分支由 `hifox repo checkout <url>` 自动创建，命名形如 `hifox-agent/<agent>/<uuid>`，例如 `hifox-agent/workbuddy/f29ffbc5-2a1d-4398-b3a2-7103f7835b9b`。
- 一个交付物一个分支；不在自己分支里改动他人认领的文件。
- 完成后用 `hifox repo push` 推送自己的 agent 分支，不要直接推 `main`。

### 提交信息约定

- subject 用英文祈使句，简短描述「做了什么」，例如 `Add hifox.md describing Hifox workspace platform`。
- 标题控制在约 50 字符内，需要时再补正文说明动机与影响。
- 一次提交只做一件事；合入主线后由 PR 号附在标题末尾，如 `Add README (#2)`。
- 不提交与本次交付无关的改动。

### PR 约定

- PR 标题与提交信息 subject 一致。
- 描述里列出改动文件、边界（只改了哪些文件）及需要评审关注的点。
- 一个 PR 对应一个交付物，便于逐份评审与回滚。
- 不自行合并，等收口人统一汇总后再合 `main`。
