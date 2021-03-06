// *************************************************************************************************
// DO NOT EDIT. FILE GENERATED BY BB-NODE-GEN.
// *************************************************************************************************

import winston from "winston";
import winstonRotateFile from "winston-daily-rotate-file";

import * as path from "path";

const LOG_LEVELS = {
  trace: 4,
  debug: 3,
  info: 2,
  warn: 1,
  error: 0
};

// Winston logger types are not currently sophisticated enough to account for
// the user-provided log levels.
function addTraceMethodType<T>(
  thing: T
): T & { trace: winston.LeveledLogMethod } {
  return thing as any;
}

// The logger is initially silent as we don't want to log anything in tests.
// You need to call configureLogger if you want logs.
let s_logger = addTraceMethodType(winston.createLogger({ levels: LOG_LEVELS }));
s_logger.silent = true;

function timestampFormatter(): string {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = (now.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = now
    .getUTCDate()
    .toString()
    .padStart(2, "0");
  const hour = now
    .getUTCHours()
    .toString()
    .padStart(2, "0");
  const minute = now
    .getUTCMinutes()
    .toString()
    .padStart(2, "0");
  const seconds = now
    .getSeconds()
    .toString()
    .padStart(2, "0");
  const milisec = now
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");

  return `${year}-${month}-${day}T${hour}:${minute}:${seconds}.${milisec}Z`;
}

function stringifyElement(cur: any): string {
  const type = typeof cur;
  if (type === "string" || type === "number" || type === "boolean") {
    return cur;
  }
  if (cur instanceof Error) {
    if (!cur.stack) {
      return cur.message;
    }
    return cur.stack;
  }

  return JSON.stringify(cur);
}

function getPrintFormat() {
  return winston.format.printf(info => {
    const message: any = info.message;
    const timestamp = info.timestamp.toUpperCase();
    const level = info.level.toUpperCase();
    const data = message.data;
    const fileName = message.fileName;

    const dataStr = !data ? "" : data.map(stringifyElement).join("");

    return `${timestamp} ${level} ${fileName} ${dataStr}`;
  });
}

function getRotatedFileTransport(logPath: string, level: Verbosity) {
  return new winstonRotateFile({
    level,
    dirname: path.dirname(logPath),
    filename: `${path.basename(logPath)}.%DATE%`,
    datePattern: "YYYYMMDD",
    maxFiles: "10d",
    auditFile: ""
  });
}

class Logger {
  private _fileName: string;

  constructor(filePath: string) {
    this._fileName = path.basename(filePath);
  }

  trace(...args: any[]): void {
    s_logger.trace({ fileName: this._fileName, data: args });
  }

  debug(...args: any[]): void {
    s_logger.debug({ fileName: this._fileName, data: args });
  }

  info(...args: any[]): void {
    s_logger.info({ fileName: this._fileName, data: args });
  }

  warn(...args: any[]): void {
    s_logger.warn({ fileName: this._fileName, data: args });
  }

  error(...args: any[]): void {
    s_logger.error({ fileName: this._fileName, data: args });
  }
}

type Verbosity = "trace" | "debug" | "info" | "warn" | "error";

function configureLogger(
  logPath: string,
  fileVerbosity: Verbosity,
  stdoutVerbosity: Verbosity
): void {
  s_logger = addTraceMethodType(
    winston.createLogger({
      levels: LOG_LEVELS,
      format: winston.format.combine(
        winston.format.timestamp({
          format: timestampFormatter,
        }),
        getPrintFormat()
      ),
      transports: [
        new winston.transports.Console({ level: stdoutVerbosity }),
        getRotatedFileTransport(logPath, fileVerbosity),
      ],
    })
  );
}

export { configureLogger };
export default Logger;
