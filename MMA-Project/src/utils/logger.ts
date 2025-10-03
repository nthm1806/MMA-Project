type LogLevel = "debug" | "info" | "warn" | "error";

function log(level: LogLevel, message: string, ...args: unknown[]) {
  // eslint-disable-next-line no-console
  console[level](`[${level.toUpperCase()}] ${message}`, ...args);
}

export const logger = {
  debug: (message: string, ...args: unknown[]) => log("debug", message, ...args),
  info: (message: string, ...args: unknown[]) => log("info", message, ...args),
  warn: (message: string, ...args: unknown[]) => log("warn", message, ...args),
  error: (message: string, ...args: unknown[]) => log("error", message, ...args),
};



