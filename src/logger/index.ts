import log4js from "log4js";
import config from "config";

const logLevel: string = config.get("logger.level");

log4js.configure({
  appenders: {
    console: {
      type: "console",
      layout: {
        type: "pattern",
        pattern: "%d{yyyy-MM-dd hh:mm:ss.SSS} [%p] %m"
      },
    }
  },
  categories: {
    default: {
      appenders: ["console"],
      level: logLevel,
      enableCallStack: true
    },
  },
  disableClustering: true,
});

const logger = log4js.getLogger();

export default logger;
