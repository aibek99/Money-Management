export function isDate (a: string): boolean {
  const dateParts: string[] = a.split("-");
  const date: Date = new Date(
    Number(dateParts[0]),
    Number(dateParts[1]) - 1,
    Number(dateParts[2])
  )
  return isFinite(+date);
}

export function splitDate(a: Date | null): string {
  if (a == null || !isFinite(+a))
    return '';
  const offset = a.getTimezoneOffset();
  a = new Date(a.getTime() - (offset*60*1000));
  return a.toISOString().split('T')[0];
}

export function toDate(a: string): Date | null {
  if (a == "")
    console.log('aa');
  // console.log(a);
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
