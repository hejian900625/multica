import { EmptyState, PageHeader } from '../components/ui'

export default function Overview() {
  return (
    <div className="page">
      <PageHeader title="概览" subtitle="工作区指标、进度与最近活动。" />
      <EmptyState title="该页面由 qoder 实现" hint="KPI 卡片 + 迭代进度 + 最近活动流" />
    </div>
  )
}
