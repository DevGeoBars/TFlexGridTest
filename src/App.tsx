import './App.css'

import React, { useEffect, useState } from 'react'

import { columns } from './__mocks__/columns'
import { data_parent } from './__mocks__/tree/data_parent'

import { Button, Grid as GridComponent } from '@tflex/uikit'

import FOLDER_ICON from './assets/folderSSO.svg';


// import '@tflex/uikit/dist/uikit.css';
import './styles/uikit.css';
import { treeConfig } from "./__mocks__/tree/treeConfig";

const Grid = GridComponent as any;
function App() {
  const [data, setData] = useState(data_parent);



  return (
    <div className="App" data-testid="app-page">
      <Grid
        data={data}
        config={treeConfig}
        dragAndDrop={true}
        lazyRender={{
          chunkSize: 10,
          chunksVisibleBuffer: 1,
        }}
        treeConfig={{
          childrenSource: 'parent',
          expandAll: false,
          parentKey: 'parent'
        }}
        onVisibleDataChange={(i) => {
          console.log('onVisibleDataChange', i);
        }}
      />

    </div>
  )
}

export default App
