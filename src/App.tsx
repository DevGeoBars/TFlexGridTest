import './App.css'
// import '@tflex/uikit/dist/uikit.css';
import './styles/uikit.css'

import { Button, Grid as GridComponent } from '@tflex/uikit'
import React, { useEffect, useState } from 'react'

import { getConfig } from './__mocks__/columns/columnConfig'
import { data_parent } from './__mocks__/tree/data_parent'
import FOLDER_ICON from './assets/folderSSO.svg'

enum DisplayMode {
  HIERARCHICAL = 'hierarchical',
  FLAT = 'flat',
  CUSTOM_CELLS = 'customCells',
  GROUPED_COLUMNS = 'groupedColumns',
}

// Опции для селекта
const displayOptions = [
  { value: DisplayMode.HIERARCHICAL, label: 'Иерархическая структура' },
  { value: DisplayMode.FLAT, label: 'Плоская структура' },
]

function App() {
  const [data, setData] = useState(data_parent)

  const [columnsConfig, setColumnsConfig] = useState<
    'simple' | 'template' | 'grouped'
  >('simple')

  return (
    <div className={'example'}>
      <div className="grid-container">
        <GridComponent
          className={'grid'}
          data={data}
          config={getConfig(columnsConfig)}
          dragAndDrop={true}
          lazyRender={{
            chunkSize: 10,
            chunksVisibleBuffer: 1,
          }}
          treeConfig={{
            childrenSource: 'parent',
            expandAll: false,
            parentKey: 'parent',
          }}
          onVisibleDataChange={(i) => {
            console.log('onVisibleDataChange', i)
          }}
        />
      </div>
      <div className={'footer'}>
        <div className={'select'}>
          <span className="mode-info">конфигурация колонок</span>
          <select
            value={columnsConfig}
            onChange={(e) => setColumnsConfig(e.target.value as any)}
            className="mode-select">
            <option value="simple">Простая таблица</option>
            <option value="template">С шаблонными ячейками</option>
            <option value="grouped">С группировкой колонок</option>
          </select>
        </div>
        <div className={'select'}>
          <span className="mode-info">конфигурация колонок</span>
          <select
            value={columnsConfig}
            onChange={(e) => setColumnsConfig(e.target.value as any)}
            className="mode-select">
            <option value="simple">Простая таблица</option>
            <option value="template">С шаблонными ячейками</option>
            <option value="grouped">С группировкой колонок</option>
          </select>
        </div>
        <div className={'select'}>
          <span className="mode-info">конфигурация колонок</span>
          <select
            value={columnsConfig}
            onChange={(e) => setColumnsConfig(e.target.value as any)}
            className="mode-select">
            <option value="simple">Простая таблица</option>
            <option value="template">С шаблонными ячейками</option>
            <option value="grouped">С группировкой колонок</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default App
