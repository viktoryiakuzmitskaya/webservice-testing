const winston = require("winston");
require("winston-daily-rotate-file");

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.DailyRotateFile({
      filename: "%DATE%.log",
      datePattern: "YYYY-MM-DD",
      dirname: "logs",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
  ),
});

module.exports = logger;
