import { type ProjectItemTreeSimple, ProjectItemSimple } from '@/models'

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

export const generateProjectsWithChildren = (
  count: number,
): Partial<ProjectItemSimple>[] => {
  const projectNames = [
    'Разработка системы',
    'Модернизация технологии',
    'Создание продукта',
    'Внедрение процесса',
    'Оптимизация оборудования',
    'Исследование рынка',
    'Разработка ПО',
    'Тестирование',
    'Документирование',
    'Обучение',
  ]

  const denotations = ['РСТ', 'РНП', 'МСТ', 'ЦПУФ', 'ОЛМ', 'АВР', 'СБР', 'ПРД']
  const persons = [
    'Иванов И.И.',
    'Петров П.П.',
    'Сидорова А.В.',
    'Кузнецов С.М.',
    'Васильева Е.К.',
    'Смирнов Д.С.',
  ]
  const goals = [
    'Разработать новый продукт',
    'Оптимизировать бизнес-процессы',
    'Внедрить инновационную технологию',
    'Повысить эффективность',
    'Сократить издержки',
    'Улучшить качество',
    'Автоматизировать процессы',
    'Модернизировать оборудование',
    'Создать цифровую платформу',
    'Обучить персонал',
  ]

  return Array.from({ length: count }, (_, i) => ({
    id: `${100 + i}`,
    __hasChildren: true,
    children: [],
    guid: `${100 + i}`,
    name: projectNames[i % projectNames.length] + ` ${Math.floor(i / 10) + 1}`,
    denotation: `${denotations[i % denotations.length]}-${
      2024 + Math.floor(i / denotations.length)
    }`,
    type: i % 3 === 0 ? 'Портфель' : i % 3 === 1 ? 'Проект' : 'Подпроект',
    responsiblePerson: persons[i % persons.length],
    startDate: `01.0${(i % 9) + 1}.2025`,
    endDate: `31.1${i % 8}.2026`,
    photo: 'some',
    goal: goals[i % persons.length],
    projectTime: Math.floor(Math.random() * 365) + 30,
  }))
}
