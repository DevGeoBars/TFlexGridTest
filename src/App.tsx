import './App.css'

import React, { useEffect, useState } from 'react'

import { columns } from './__mocks__/columns'
import { data as dataLocal } from './__mocks__/data'

import { Button, Grid as GridComponent } from '@tflex/uikit'

import FOLDER_ICON from './assets/folderSSO.svg';


// import '@tflex/uikit/dist/uikit.css';
import './styles/uikit.css';

const Grid = GridComponent as any;
function App() {
  const [data, setData] = useState(dataLocal);



  return (
    <div className="App" data-testid="app-page">
      <Grid
        data={data}
        config={{
          columns,
          rowHeight: 50,
        }}
        dragAndDrop={false}
      />
      <Button onClick={() => {
          setData((prev) =>
            prev.map((i) => ({
              ...i,
              mainscheduledplan_projectelemanswerableuser_photo: FOLDER_ICON,
            })),
          )
        }}>get icons</Button>
    </div>
  )
}

export default App
