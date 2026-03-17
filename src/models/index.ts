import { TGridProps } from '@tflex/uikit/src/components/Grid/types'

export interface ProjectItem {
  // Обязательные поля
  guid: string
  id: string
  name: string
  denotation: string

  // Опциональные поля
  budget_cost_unit?: string
  budget_cost_value?: string
  budget_fact_unit?: string
  budget_fact_value?: string
  budget_plan_unit?: string
  budget_plan_value?: string
  description?: string
  filesfolder_name?: string | null
  goal?: string
  mainscheduledplan_actualdurationindays?: string
  mainscheduledplan_actualenddate?: string | null
  mainscheduledplan_actualstartdate?: string | null
  mainscheduledplan_durationindays?: string
  mainscheduledplan_enddate?: string
  mainscheduledplan_name?: string
  mainscheduledplan_progress?: string
  mainscheduledplan_projectelemanswerableuser_photo?: string | null
  mainscheduledplan_projectelemanswerableuser_shortname?: string
  mainscheduledplan_s_guid?: string
  mainscheduledplan_startdate?: string
  number?: number
  result?: string
  s_classid?: string
  type?: string
}

export type TreeList = TGridProps<ProjectItem>
