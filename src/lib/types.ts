export type Tone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger'

export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'review' | 'done'

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent'

export interface Task {
  id: string
  identifier: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  assigneeId?: string
  labels: string[]
  points: number
  createdAt: string
  dueDate?: string
}

export type SprintStatus = 'pending' | 'active' | 'completed'

export interface BurndownPoint {
  date: string
  remaining: number
  ideal: number
}

export interface Sprint {
  id: string
  name: string
  status: SprintStatus
  startDate: string
  endDate: string
  goal: string
  taskIds: string[]
  totalPoints: number
  completedPoints: number
  burndown: BurndownPoint[]
}

export type MemberKind = 'agent' | 'human'

export type MemberStatus = 'idle' | 'running' | 'offline'

export interface Member {
  id: string
  name: string
  kind: MemberKind
  role: string
  status: MemberStatus
  load: number
  skills: string[]
  currentTaskId?: string
}

export interface Crew {
  id: string
  name: string
  description: string
  space: string
  leaderId: string
  memberIds: string[]
}

export interface Activity {
  id: string
  actorId: string
  action: string
  target: string
  at: string
  tone: Tone
}

export interface Workspace {
  space: { id: string; name: string; identifier: string }
  tasks: Task[]
  sprints: Sprint[]
  members: Member[]
  crews: Crew[]
  activities: Activity[]
}
