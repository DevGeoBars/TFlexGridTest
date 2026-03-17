import { TGridColumnConfig } from '@tflex/uikit/src/components/Grid/types'
import React from 'react'

import FOLDER_LOGO from '../../assets/folderSSO.svg'
import { ProjectItem } from '../../models'

export const columnsWithTemplate: TGridColumnConfig<ProjectItem>[] = [
  {
    groupTitle: null,
    cell: (props) => {
      console.log(props)

      return (
        <div
          style={{ height: '100%', width: '100%' }}
          className={'folder-column'}>
          <img src={FOLDER_LOGO} alt={props.item.id} />
        </div>
      )
    },
    header: 'Фото',
    key: 'mainscheduledplan_projectelemanswerableuser_photo' as any,

    isTreeColumn: true,
  },
  {
    groupTitle: null,
    header: 'ФИО',
    key: 'mainscheduledplan_projectelemanswerableuser_shortname' as any,
    width: 'minmax(200px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Тип',
    key: 'type' as any,
    width: 'minmax(200px, 2fr)',
  },
  {
    groupTitle: null,
    header: 'Наименование',
    key: 'name' as any,
    width: 'min-content',
  },
  {
    groupTitle: null,
    header: 'Обозначение',
    key: 'denotation',
    width: 'minmax(120px, 1fr)',
  },
  {
    header: 'Наименование',
    key: 'mainscheduledplan_name',
    width: 'minmax(180px, 2fr)',
  },
  {
    header: 'Выполнено',
    key: 'mainscheduledplan_progress',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Начало',
    key: 'mainscheduledplan_startdate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Окончание',
    key: 'mainscheduledplan_enddate',
    width: 'minmax(100px, 1fr)',
  },

  {
    groupTitle: null,
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
]
