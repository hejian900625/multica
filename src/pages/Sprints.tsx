import { EmptyState, PageHeader } from '../components/ui'

export default function Sprints() {
  return (
    <div className="page">
      <PageHeader title="迭代" subtitle="迭代进度、目标与燃尽图。" />
      <EmptyState title="该页面由 pi 实现" hint="迭代卡片 + 燃尽图（纯 SVG）" />
    </div>
  )
}
