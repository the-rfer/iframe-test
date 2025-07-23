export function dateCounter() {
    const eventStart = new Date(2025, 7, 14);
    const eventEnd = new Date(2025, 7, 15);
    const today = new Date();
    const localToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const diffTime = eventStart - localToday;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let message = '';

    const isDayBefore = diffDays === 1;
    const isEventPeriod =
        localToday.getTime() === eventStart.getTime() ||
        localToday.getTime() === eventEnd.getTime();
    const isPast = localToday > eventEnd;

    if (isDayBefore) {
        message = 'Começa já amanha!';
    } else if (isEventPeriod) {
        message = 'Já começou!';
    } else if (isPast) {
        message = 'O evento já terminou';
    } else if (diffDays > 1) {
        message = `Faltam ${diffDays} dias para começar!`;
    }

    return message;
}
