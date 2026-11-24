import { EmptyState, PageHeader } from '../components/ui'

export default function Board() {
  return (
    <div className="page">
      <PageHeader title="任务看板" subtitle="按状态分列查看任务，支持筛选与拖拽。" />
      <EmptyState title="该页面由 minimax 实现" hint="状态列 + 任务卡 + 优先级筛选 + 拖拽改状态" />
    </div>
  )
}
