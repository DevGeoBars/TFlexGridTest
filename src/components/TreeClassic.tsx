import { Grid as ClassicTree } from '@tflex/uikit'
import React, { useState } from 'react'

import {
  generateProjectsWithChildren,
  generateTreeProjectsIds,
} from '@/__mocks__/data/tree/treeGenerator'
import { fetchTreeData } from '@/components/helpers/fetchTreeData'
import { useTreeConfig } from '@/components/hooks/useConfig'
import { ProjectItemSimple } from '@/models'

export const TreeListClassic = () => {
  const [data, setData] = useState(generateProjectsWithChildren(5))

  const { config } = useTreeConfig()

  return (
    <ClassicTree
      className={'grid'}
      data={data}
      config={config}
      dragAndDrop={true}
      treeConfig={{
        childrenSource: 'children',
        onExpand: async (item) => {
          const children = generateProjectsWithChildren(5)
          setData((prev) =>
            prev.map((n) => (n.id === item.id ? { ...n, children } : n)),
          )
        },
      }}
    />
  )
}
