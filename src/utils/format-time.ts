import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date: Date | string | number, newFormat?: string | undefined): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: Date | string | number, newFormat?: string | undefined): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: Date | string | number): number | string {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: Date | string | number): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function fChatTime(date: Date | number): number | string {
  const currentTime = Date.now();
  const dateTime = date as number;
  const oneDayTimestamp = 86400000;
  const check = currentTime - dateTime;

  const validationYesterday = check >= oneDayTimestamp && check <= oneDayTimestamp * 2;
  const validationOtherDay = check >= oneDayTimestamp && check >= oneDayTimestamp * 2;

  if (validationOtherDay) {
    return date ? format(new Date(date), 'dd/MM/yy') : '';
  } else if (validationYesterday) {
    return 'yesterday';
  } else {
    return date ? format(new Date(date), 'HH:mm') : '';
  }
}
