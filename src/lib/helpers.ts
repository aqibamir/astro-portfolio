export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInPakistan(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Pakistan's time
  const offsetPakistan = 5; // Pakistan Standard Time (UTC+5)
  now.setHours(now.getUTCHours() + offsetPakistan);

  return now;
}

export function formatTimeForPakistan(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "Asia/Karachi", // Pakistan's time zone
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. For Pakistan, it is PKT (Pakistan Standard Time)
  formattedTime += " PKT";

  return formattedTime;
}
