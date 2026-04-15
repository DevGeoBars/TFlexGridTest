import './App.css'
import './styles/uikit.css'

// import '@tflex/uikit/dist/uikit.css';
import React, { useRef, useState } from 'react'

import {
  DataGrid,
  DataGridClassic,
  TreeList,
  TreeListClassic,
} from '@/components'

function App() {
  const componentRef = useRef<any>(null)

  const [type, setType] = useState<'simple' | 'tree' | 'gridClassic'>('simple')

  return (
    <div className={'example'}>
      <div className="grid-container">
        {type === 'simple' ? (
          <DataGrid />
        ) : type === 'gridClassic' ? (
          <DataGridClassic />
        ) : (
          <TreeListClassic />
        )}
      </div>
      <div className={'footer'}>
        <div className={'select'}>
          <span className="mode-info">Тип компоненты</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="mode-select">
            <option value="simple">Простая таблица</option>
            <option value="gridClassic">Классическая таблица</option>
            <option value="template">Дерево</option>
          </select>
        </div>
        {/*<div className={'select'}>*/}
        {/*  <span className="mode-info">*/}
        {/*    конфигурация данных (плоская / иерархическая)*/}
        {/*  </span>*/}
        {/*  <select*/}
        {/*    value={columnsConfig}*/}
        {/*    onChange={(e) => setColumnsConfig(e.target.value as any)}*/}
        {/*    className="mode-select">*/}
        {/*    <option value="simple">Простая таблица</option>*/}
        {/*    <option value="template">С шаблонными ячейками</option>*/}
        {/*    <option value="grouped">С группировкой колонок</option>*/}
        {/*  </select>*/}
        {/*</div>*/}

        <button
          onClick={() => console.log('componentRef', componentRef.current)}>
          data ref
        </button>
      </div>
    </div>
  )
}

export default App
