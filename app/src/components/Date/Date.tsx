'use client'
import React from 'react';
import { formatDate } from '../utils/formatDate';
import { DateIcon } from '../Icon';

interface DateProps extends React.HTMLAttributes<HTMLDivElement> {
  date: string | Date;
  /**
 * Formats a given date object or date string into a specified format.
 *
 * The format string can contain the following placeholders:
 *
 * - `YYYY`: Full year (e.g., 2024)
 * - `YY`: Last two digits of the year (e.g., 24)
 * - `MMMM`: Full month name (e.g., January)
 * - `MMM`: Short month name (e.g., Jan)
 * - `MM`: Month number with leading zero (e.g., 01 for January)
 * - `M`: Month number without leading zero (e.g., 1 for January)
 * - `DD`: Day of the month with leading zero (e.g., 01)
 * - `D`: Day of the month without leading zero (e.g., 1)
 * - `do`: Day of the month with ordinal suffix (e.g., 1st, 2nd, 3rd, 4th)
 * - `dddd`: Full weekday name (e.g., Monday)
 * - `ddd`: Short weekday name (e.g., Mon)
 * - `HH`: Hours in 24-hour format with leading zero (e.g., 01, 14)
 * - `H`: Hours in 24-hour format without leading zero (e.g., 1, 14)
 * - `hh`: Hours in 12-hour format with leading zero (e.g., 01, 02)
 * - `h`: Hours in 12-hour format without leading zero (e.g., 1, 2)
 * - `mm`: Minutes with leading zero (e.g., 01, 59)
 * - `m`: Minutes without leading zero (e.g., 1, 59)
 * - `ss`: Seconds with leading zero (e.g., 01, 59)
 * - `s`: Seconds without leading zero (e.g., 1, 59)
 * - `A`: AM/PM indicator in uppercase (e.g., AM, PM)
 * - `a`: am/pm indicator in lowercase (e.g., am, pm)
 *
 * @param dateObj The date to format, either as a Date object or a date string in the format `DD/MM/YYYY`.
 * @param formatString The format string to use for formatting the date.
 * @returns The formatted date string.
 *
 * @example
 * formatString = "MMMM D, YYYY" // "July 26, 2024"
 * formatString = "DD/MM/YYYY" // "26/07/2024"
 * formatString = "do MMMM YYYY" // "26th January 2025"
 */
  formatString?: string;
  iconEnabled?: boolean;
  icon?: string | React.ReactNode;
  iconPosition?: "before" | "after";
  iconStyle?: string;
  className?: string;
}

export const Date: React.FC<DateProps> = ({ date, formatString = "MMMM D, YYYY", className = '', iconEnabled, icon, iconPosition="before", iconStyle="", ...rest }) => {
  const formattedDate = formatDate(date, formatString);

  return (
    <div className={className} {...rest}>
      {(iconEnabled && iconPosition === "before") && <>
      {icon ? icon : <DateIcon />}</>}
      {formattedDate}
      {(iconEnabled && iconPosition === "after") && <>
      {icon ? icon : <DateIcon />}</>}
    </div>
  );
};