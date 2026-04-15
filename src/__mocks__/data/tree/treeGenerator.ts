import { type ProjectItemTreeSimple } from '@/models'

export const generateTreeProjects = (): Partial<ProjectItemTreeSimple>[] => {
  const result: Partial<ProjectItemTreeSimple>[] = []

  // Уровень 1: корневые (parent: null)
  for (let i = 1; i <= 3; i++) {
    result.push({
      id: `${i}`,
      guid: `${i}`,
      name: `Корневой проект ${i}`,
      parent: null,
      type: i === 1 ? 'Портфель' : i === 2 ? 'Проект' : 'Программа',
      denotation: `ROOT-${i}`,
      responsiblePerson: `Руководитель ${i}`,
    })
  }

  // Уровень 2: дети корневых (parent ссылается на id корневого)
  for (let i = 1; i <= 6; i++) {
    const parentId = `${Math.floor((i - 1) / 2) + 1}`
    result.push({
      id: `${10 + i}`,
      guid: `${10 + i}`,
      name: `Подпроект ${i}`,
      parent: parentId,
      type: 'Проект',
      denotation: `SUB-${i}`,
      responsiblePerson: `Менеджер ${i}`,
    })
  }

  // Уровень 3: дети второго уровня
  for (let i = 1; i <= 12; i++) {
    const parentId = `${10 + Math.floor((i - 1) / 4) + 1}`
    result.push({
      id: `${100 + i}`,
      guid: `${100 + i}`,
      name: `Задача ${i}`,
      parent: parentId,
      type: 'Задача',
      denotation: `TASK-${i}`,
      responsiblePerson: `Исполнитель ${i}`,
    })
  }

  return result
}

export const generateTreeProjectsIds = (): Partial<ProjectItemTreeSimple>[] => {
  const result: Partial<ProjectItemTreeSimple>[] = []

  // Уровень 1: корневые (parent: null)
  for (let i = 1; i <= 3; i++) {
    result.push({
      id: `${i}`,
      guid: `${i}`,
      parent: null,
    })
  }

  // Уровень 2: дети корневых (parent ссылается на id корневого)
  for (let i = 1; i <= 6; i++) {
    const parentId = `${Math.floor((i - 1) / 2) + 1}`
    result.push({
      id: `${10 + i}`,
      guid: `${10 + i}`,
      parent: parentId,
    })
  }

  // Уровень 3: дети второго уровня
  for (let i = 1; i <= 12; i++) {
    const parentId = `${10 + Math.floor((i - 1) / 4) + 1}`
    result.push({
      id: `${100 + i}`,
      guid: `${10 + i}`,
      parent: parentId,
    })
  }

  return result
}
