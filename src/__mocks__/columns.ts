
export const columns = [
  {
    groupTitle: 'Ответственный',
    header: 'Фото',
    key: 'mainscheduledplan_projectelemanswerableuser_photo',
    width: 'minmax(60px, 60px)',
  },
  {
    groupTitle: 'Ответственный',
    header: 'ФИО',
    key: 'mainscheduledplan_projectelemanswerableuser_shortname',
    width: 'minmax(200px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Тип',
    key: 'type',
    width: 'minmax(200px, 2fr)',
  },
  {
    groupTitle: null,
    header: 'Наименование',
    key: 'name',
    width: 'min-content',
  },
  {
    groupTitle: null,
    header: 'Обозначение',
    key: 'denotation',
    width: 'minmax(120px, 1fr)',
  },
  {
    groupTitle: 'Основной план-график',
    header: 'Наименование',
    key: 'mainscheduledplan_name',
    width: 'minmax(180px, 2fr)',
  },
  {
    groupTitle: 'Основной план-график',
    header: '% выполнения',
    key: 'mainscheduledplan_progress',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Начало',
    key: 'mainscheduledplan_startdate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Окончание',
    key: 'mainscheduledplan_enddate',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Длительность',
    key: 'mainscheduledplan_durationindays',
    width: 'minmax(100px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Результат',
    key: 'result',
    width: 'minmax(150px, 1fr)',
  },
  {
    groupTitle: null,
    header: 'Цель',
    key: 'goal',
    width: 'minmax(150px, 1fr)',
  },
] as any;