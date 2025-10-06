const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric"
};

/**
 * Formats a date string consistently across server and client by forcing UTC timezone.
 * Returns undefined for invalid or missing dates, allowing callers to guard rendering.
 */
export function formatDate(
  input?: string | number | Date,
  options: Intl.DateTimeFormatOptions = DEFAULT_OPTIONS
): string | undefined {
  if (!input) {
    return undefined;
  }

  const date = input instanceof Date ? input : new Date(input);
  if (!(date instanceof Date) || Number.isNaN(date.valueOf())) {
    return undefined;
  }

  try {
    return new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...options }).format(date);
  } catch (error) {
    return undefined;
  }
}
