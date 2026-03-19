import { ProjectItemSimple } from '../../../models'

export const generateProjects = (count: number): ProjectItemSimple[] => {
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

  return Array.from({ length: count }, (_, i) => ({
    id: `${100 + i}`,
    name: projectNames[i % projectNames.length] + ` ${Math.floor(i / 10) + 1}`,
    denotation: `${denotations[i % denotations.length]}-${
      2024 + Math.floor(i / denotations.length)
    }`,
    type: i % 3 === 0 ? 'Портфель' : i % 3 === 1 ? 'Проект' : 'Подпроект',
    result: i % 4 === 0 ? 'Завершен' : i % 4 === 1 ? 'В процессе' : 'Не начат',
    progress: `${(i * 7) % 101} %`,
    responsiblePerson: persons[i % persons.length],
    startDate: `01.0${(i % 9) + 1}.2025`,
    endDate: `31.1${i % 8}.2026`,
  }))
}
