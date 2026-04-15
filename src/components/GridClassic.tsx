import { Grid as GridComponent } from '@tflex/uikit'
import React, { useState } from 'react'

import { generateProjectIds } from '@/__mocks__'
import { fetchData, fetchHardData } from '@/components/helpers/fetchData'
import { useConfig } from '@/components/hooks/useConfig'
import { ProjectItemSimple } from '@/models'

export const DataGridClassic = () => {
  const [data, setData] = useState(generateProjectIds(200))

  const { config } = useConfig()

  return (
    <GridComponent
      totalCount={1000}
      className={'grid'}
      data={data}
      config={config}
      dragAndDrop={true}

      // treeConfig={{
      //   childrenSource: 'parent',
      //   expandAll: false,
      //   parentKey: 'parent',
      // }}
    />
  )
}
