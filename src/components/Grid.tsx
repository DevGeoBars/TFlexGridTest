import { Grid as GridComponent } from '@tflex/uikit'
import React from 'react'

export const DataGrid = () => {
  console.log('a')
  return (
    <GridComponent
      className={'grid'}
      data={[]}
      config={{ columns: [], rowHeight: 48 }}
      dragAndDrop={true}
      onNeedData={(items) => {
        console.log(items)
      }}
      onVisibleDataChange={(i) => {
        console.log('onVisibleDataChange', i)
      }}
      lazyRender={{
        chunkSize: 100,
        chunksVisibleBuffer: 1,
      }}
      treeConfig={{
        childrenSource: 'parent',
        expandAll: false,
        parentKey: 'parent',
      }}
    />
  )
}
