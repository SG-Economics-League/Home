const SGT_TIME_ZONE = "Asia/Singapore";

function formatDateLong(ms: number): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: SGT_TIME_ZONE,
  }).format(new Date(ms));
}

function formatWeekdayShort(ms: number): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    timeZone: SGT_TIME_ZONE,
  }).format(new Date(ms));
}

function formatTime12h(ms: number): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: SGT_TIME_ZONE,
  }).format(new Date(ms));
}

function formatTime24h(ms: number): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: SGT_TIME_ZONE,
  }).format(new Date(ms));
}

export { formatDateLong, formatWeekdayShort, formatTime12h, formatTime24h };
