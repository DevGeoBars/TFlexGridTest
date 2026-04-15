import { Grid } from '@tflex/uikit'
import React, { useState } from 'react'

import { generateProjects } from '@/__mocks__'
import { useConfig } from '@/components/hooks/useConfig'

export const DataGridClassic = () => {
  const [data, setData] = useState(generateProjects(100))
  const { config } = useConfig()
  return (
    <Grid
      data={data}
      config={config}
      page={1}
      pageSize={100}
      totalCount={1000}
      onPageChange={(e) => {
        console.log(e)
      }}
    />
  )
}
