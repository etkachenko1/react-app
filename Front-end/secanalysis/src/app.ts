import Logger from "./logger";

const logger = new Logger(__filename);

export interface Application {
  dispose(): Promise<void>;
}

export function startApp(): Application {
  logger.info("----- STARTING SECANALYSIS -----");

  logger.info("Hello World");

  return {
    async dispose() {
      logger.info("Disposing of the application");
    }
  };
}
