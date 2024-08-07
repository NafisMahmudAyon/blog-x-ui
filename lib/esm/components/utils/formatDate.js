'use client';
const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21)
        return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const parseCustomDate = (dateString) => {
    const parts = dateString.split('/');
    if (parts.length === 3) {
        const [day, month, year] = parts.map(part => parseInt(part, 10));
        return new Date(year, month - 1, day);
    }
    else {
        return new Date(dateString); // Handle ISO 8601 and other standard formats
    }
};
export const formatDate = (dateObj, formatString) => {
    let date;
    if (typeof dateObj === 'string') {
        date = parseCustomDate(dateObj);
    }
    else {
        date = dateObj;
    }
    const map = {
        'YYYY': date.getFullYear().toString(),
        'YY': date.getFullYear().toString().slice(-2),
        'MMMM': monthNames[date.getMonth()],
        'MMM': monthNames[date.getMonth()].slice(0, 3),
        'MM': ('0' + (date.getMonth() + 1)).slice(-2),
        'M': (date.getMonth() + 1).toString(),
        'DD': ('0' + date.getDate()).slice(-2),
        'do': date.getDate().toString() + getOrdinalSuffix(date.getDate()),
        'D': date.getDate().toString(),
        'dddd': dayNames[date.getDay()],
        'ddd': dayNames[date.getDay()].slice(0, 3),
        'HH': ('0' + date.getHours()).slice(-2),
        'H': date.getHours().toString(),
        'hh': ('0' + (date.getHours() % 12 || 12)).slice(-2),
        'h': (date.getHours() % 12 || 12).toString(),
        'mm': ('0' + date.getMinutes()).slice(-2),
        'm': date.getMinutes().toString(),
        'ss': ('0' + date.getSeconds()).slice(-2),
        's': date.getSeconds().toString(),
        'A': date.getHours() < 12 ? 'AM' : 'PM',
        'a': date.getHours() < 12 ? 'am' : 'pm'
    };
    return formatString.replace(/YYYY|YY|MMMM|MMM|MM|M|DD|D|do|dddd|ddd|HH|H|hh|h|mm|m|ss|s|A|a/g, (matched) => map[matched].toString());
};
