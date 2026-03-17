import { TGridColumnConfig } from '@tflex/uikit/src/components/Grid/types'

import { ProjectItem } from '../../models'

export const simpleColumns: TGridColumnConfig<ProjectItem>[] = [
  {
    groupTitle: null,
    header: 'ФИО',
    key: 'mainscheduledplan_projectelemanswerableuser_shortname',
    width: 'minmax(200px, 1fr)',
    isTreeColumn: true,
  },
  {
    groupTitle: null,
    header: 'Тип',
    key: 'type',
    width: 'minmax(200px, 2fr)',
  },
  {
    groupTitle: null,
    header: 'Наименование',
    key: 'name',
    width: 'min-content',
  },
  {
    groupTitle: null,
    header: 'Обозначение',
    key: 'denotation',
    width: 'minmax(120px, 1fr)',
  },
] as any
