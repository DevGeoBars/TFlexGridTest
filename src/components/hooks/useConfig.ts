import { useRef } from 'react'

import { columns } from '@/__mocks__'

export const useConfig = () => {
  const config = useRef({ columns, rowHeight: 48 })

  return { config: config.current }
}
