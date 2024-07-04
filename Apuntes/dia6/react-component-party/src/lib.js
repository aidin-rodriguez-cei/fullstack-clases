export const suma = (num1, num2) => {
    return num1 + num2;
}

    // obtener la fecha de AHORA!!
    // obtener la fecha que le mando
    // restar las 2 fechas
    // contar cuanto tiempo paso entre una y otra...(segundos, minutos, dias, años, etc)

export const getRelativeTime = (date) => {
    const now = new Date();
    const seconds = Math.round((now - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(days / 365);

    const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

    if (Math.abs(seconds) < 60) {
        return rtf.format(-seconds, 'second');
    } else if (Math.abs(minutes) < 60) {
        return rtf.format(-minutes, 'minute');
    } else if (Math.abs(hours) < 24) {
        return rtf.format(-hours, 'hour');
    } else if (Math.abs(days) < 30) {
        return rtf.format(-days, 'day');
    } else if (Math.abs(months) < 12) {
        return rtf.format(-months, 'month');
    } else {
        return rtf.format(-years, 'year');
    }
}