import './App.css'


import React, { useState } from 'react'

import { columns } from './__mocks__/columns'
import { data } from './__mocks__/data'
import { Grid } from '@tflex/uikit'

function App() {


  return (
    <div className="App" data-testid="app-page">
     <Grid data={data} config={{columns}} dragAndDrop={false} />

    </div>
  )
}

export default App
