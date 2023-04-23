export function toDate(a: string): Date {
  const dateParts: string[] = a.split(".");
  return new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  );
}

export function isDate (a: string): boolean {
  const dateParts: string[] = a.split(".");
  const date: Date = new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  )
  return isFinite(+date);
}

export function splitDate(a: Date): string {
  if (a == null || !isFinite(+a))
    return '';
  let s: string = a.getDate().toString() + '.';
  s += (a.getMonth() + 1).toString() + '.';
  s += a.getFullYear().toString();
  return s;
}

export function defaultFormat(a: Date | null): string {
  if (a == null || !isFinite(+a))
    return '';
  const offset = a.getTimezoneOffset();
  a = new Date(a.getTime() - (offset*60*1000));
  return a.toISOString().split('T')[0];
}

export function toDateLine(a: string): Date | null {
  const dateParts: string[] = a.split("-");
  const date: Date = new Date(
    Number(dateParts[0]),
    Number(dateParts[1]) - 1,
    Number(dateParts[2])
  );
  if (!isFinite(+date))
    return null;
  return date;
}
