import type { MemberStatus, SprintStatus, TaskPriority, TaskStatus, Tone } from './types'

export const TASK_STATUS: Record<TaskStatus, { label: string; tone: Tone }> = {
  backlog: { label: '待规划', tone: 'neutral' },
  todo: { label: '待开始', tone: 'accent' },
  in_progress: { label: '进行中', tone: 'warning' },
  review: { label: '评审中', tone: 'accent' },
  done: { label: '已完成', tone: 'success' },
}

export const TASK_STATUS_ORDER: TaskStatus[] = ['backlog', 'todo', 'in_progress', 'review', 'done']

export const TASK_PRIORITY: Record<TaskPriority, { label: string; tone: Tone }> = {
  low: { label: '低', tone: 'neutral' },
  medium: { label: '中', tone: 'accent' },
  high: { label: '高', tone: 'warning' },
  urgent: { label: '紧急', tone: 'danger' },
}

export const SPRINT_STATUS: Record<SprintStatus, { label: string; tone: Tone }> = {
  pending: { label: '未开始', tone: 'neutral' },
  active: { label: '进行中', tone: 'success' },
  completed: { label: '已完成', tone: 'accent' },
}

export const MEMBER_STATUS: Record<MemberStatus, { label: string; tone: Tone }> = {
  idle: { label: '空闲', tone: 'neutral' },
  running: { label: '执行中', tone: 'success' },
  offline: { label: '离线', tone: 'neutral' },
}
