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
          <img
            src={FOLDER_LOGO}
            alt={props.item.mainscheduledplan_projectelemanswerableuser_photo?.toString()}
          />
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
    width: '150px',
    cell: (props) => {
      const progressStr = props.item.mainscheduledplan_progress || '0 %'
      const progress = parseInt(progressStr) || 0

      // Расчет цвета от красного (0%) к зеленому (100%)
      const red = Math.min(255, Math.floor(255 * (1 - progress / 100)))
      const green = Math.min(255, Math.floor(255 * (progress / 100)))
      const color = `rgb(${red}, ${green}, 0)`

      return (
        <div
          style={{
            width: '90%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
          }}>
          <div
            style={{
              width: '100%',
              height: '16px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative',
            }}>
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: color,
                transition: 'width 0.3s ease',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '11px',
                color: progress > 50 ? 'white' : 'black',
                fontWeight: 'bold',
                textShadow: progress > 50 ? '0 0 2px rgba(0,0,0,0.5)' : 'none',
              }}>
              {progressStr}
            </span>
          </div>
        </div>
      )
    },
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
    headerCellClassName: 'test-column-header', //todo@bars не реагирует
  },
]
