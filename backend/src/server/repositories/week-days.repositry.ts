export interface IWeekDaysRepository {
  readonly id: number;
  readonly day: string;
}

export const weekDaysRepository: IWeekDaysRepository[] = [
  { id: 0, day: 'ПН', },
  { id: 1, day: 'ВТ', },
  { id: 2, day: 'СР', },
  { id: 3, day: 'ЧТ', },
  { id: 4, day: 'ПТ', },
  { id: 5, day: 'СБ', },
  { id: 6, day: 'ВС', }
];
