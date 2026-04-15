import { Grid } from '@tflex/uikit'
import React, { useState } from 'react'

import { generateProjectIds, generateProjects } from '@/__mocks__'
import { fetchData, fetchHardData } from '@/components/helpers/fetchData'
import { useConfig } from '@/components/hooks/useConfig'
import { ProjectItemSimple } from '@/models'

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
