export interface ProjectItemSimple {
  id: string
  photo: string
  name: string
  denotation: string
  type: string
  result: string
  progress: string
  responsiblePerson: string
  projectTine: number
  goal: string
  startDate: string
  endDate: string
}

export interface Employee {
  id: string
  shortName: string // ФИО кратко (например: "Петров П.П.")
  fullName?: string // Полное ФИО
  photo?: string | null
  position?: string
  department?: string
  email?: string
  birthDate?: string // Дата рождения
}

export interface GridSimpleStructure {
  id: string
}

export interface TreeSimpleStructure {
  id: string
  parent: string
}
