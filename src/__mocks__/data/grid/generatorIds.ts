import { type GridSimpleStructure } from '../../../models'

export const generateIds = (count: number): GridSimpleStructure[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${100 + i}`,
  }))
}
