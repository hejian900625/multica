import { EmptyState, PageHeader } from '../components/ui'

export default function Crews() {
  return (
    <div className="page">
      <PageHeader title="Crews" subtitle="小队构成、分工与协作状态。" />
      <EmptyState title="该页面由 workbuddy 实现" hint="Crew 卡片 + 成员分工 + 负载概览" />
    </div>
  )
}
