export const DATE_OF_BIRTH = { year: 1983, month: 7, day: 12 } as const;

const BERLIN = "Europe/Berlin";

type CalendarDate = { year: number; month: number; day: number };

export function ageOnDate(
  year: number,
  month: number,
  day: number,
  birth: CalendarDate = DATE_OF_BIRTH,
): number {
  let age = year - birth.year;
  const birthdayHasPassed =
    month > birth.month || (month === birth.month && day >= birth.day);
  if (!birthdayHasPassed) age -= 1;
  return age;
}

export function berlinCalendarDate(date: Date): CalendarDate {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BERLIN,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return { year: value("year"), month: value("month"), day: value("day") };
}

export function ageInYears(on: Date = new Date()): number {
  const today = berlinCalendarDate(on);
  return ageOnDate(today.year, today.month, today.day);
}
