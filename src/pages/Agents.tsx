import { EmptyState, PageHeader } from '../components/ui'

export default function Agents() {
  return (
    <div className="page">
      <PageHeader title="Agents" subtitle="成员状态、负载与当前任务。" />
      <EmptyState title="该页面由 opencode 实现" hint="成员卡片 + 状态徽标 + 负载条 + 当前任务" />
    </div>
  )
}
