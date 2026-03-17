import { TGridColumnConfig } from '@tflex/uikit/src/components/Grid/types'

import { ProjectItem } from '../../models'

const INFO_GROUP_TITLE = 'Основная информация'
const DATES_GROUP_TITLE = 'Сроки'
const EFFECT_GROUP_TITLE = 'Сроки'

export const columnsWithGroupTitle: TGridColumnConfig<ProjectItem>[] = [
  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'Наименование',
    key: 'name',
    width: 'min-content',
  },
  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'ФИО',
    key: 'mainscheduledplan_projectelemanswerableuser_shortname',
    width: 'minmax(200px, 1fr)',
  },
  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'Тип',
    key: 'type',
    width: 'minmax(200px, 2fr)',
    isTreeColumn: true,
  },

  {
    groupTitle: INFO_GROUP_TITLE,
    header: 'Обозначение',
    key: 'denotation',
    width: 'minmax(120px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Наименование',
    key: 'mainscheduledplan_name',
    width: 'minmax(180px, 2fr)',
  },

  {
    groupTitle: DATES_GROUP_TITLE,
    header: 'Начало',
    key: 'mainscheduledplan_startdate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: DATES_GROUP_TITLE,
    header: 'Окончание',
    key: 'mainscheduledplan_enddate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: DATES_GROUP_TITLE,
    header: 'Длительность',
    key: 'mainscheduledplan_durationindays',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: EFFECT_GROUP_TITLE,
    header: '% выполнения',
    key: 'mainscheduledplan_progress',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: EFFECT_GROUP_TITLE,
    header: 'Результат',
    key: 'result',
    width: 'minmax(150px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Цель',
    key: 'goal',
    width: 'minmax(150px, 1fr)',
  },
] as any
