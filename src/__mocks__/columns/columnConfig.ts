import {
  TGridColumnConfig,
  TGridConfig,
} from '@tflex/uikit/src/components/Grid/types'

import { ProjectItem } from '../../models'
import { columnsWithGroupTitle, columnsWithTemplate, simpleColumns } from '.'

export const getConfig = (
  type: 'simple' | 'template' | 'grouped',
): TGridConfig<ProjectItem> => ({
  columns:
    type === 'simple'
      ? simpleColumns
      : type === 'template'
      ? columnsWithTemplate
      : columnsWithGroupTitle,
  rowHeight: 48,
})
