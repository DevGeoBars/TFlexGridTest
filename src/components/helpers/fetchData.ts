import { generateProjects } from '@/__mocks__'
import { ProjectItemSimple } from '@/models'

export const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = generateProjects(200) as Partial<ProjectItemSimple>[]
  return data
}
