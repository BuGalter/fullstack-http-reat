export interface IMonth {
  readonly id: number;
  readonly name: string;
  readonly days: string;
  readonly dayStart: number;
}

export class Month implements IMonth {
  readonly id: number;

  readonly name: string;

  readonly days: string;

  readonly dayStart: number;

  constructor(monthId, monthName, monthDays, monthDayStart) {
    this.id = monthId;
    this.name = monthName;
    this.days = monthDays;
    this.dayStart = monthDayStart;
  }
}
