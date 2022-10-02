import { createDatabaseConnection } from '../database';
import { createWebServer } from '../api';

export type startOpenType = { start: () => void; stop: () => void };

type createCoreType = {
  database?: startOpenType;
  webserver?: startOpenType;
};

export const createCore = (configs: createCoreType = {}): startOpenType => {
  const database: startOpenType = configs.database || createDatabaseConnection();
  const webserver: startOpenType = configs.webserver || createWebServer();

  const start = (): void => {
    console.log('> [core] Starting');
    database.start();
    webserver.start();
    console.log('> [core] Starting done! System running!');
  };

  const stop = (): void => {
    console.log('> [core] Stoping');
    webserver.stop();
    database.stop();
    console.log('> [core] Stoping done! System running!');
  };

  return {
    start,
    stop,
  };
};
