type createDatabaseConnectionReturn = {
  start: () => void;
  stop: () => void;
};

export const createDatabaseConnection = (): createDatabaseConnectionReturn => {
  const start = (): void => {
    console.log('> [database] Starting');
    console.log('> [database] Connect in postgres');
    console.log('> [database] Running migrations');
    console.log('> [database] Starting done! System running!');

    throw new Error();
  };

  const stop = (): void => {
    console.log('> [database] Stopping...');
    console.log('> [database] Close postgres connection');
    console.log('> [database] Stopping done! System running!');
  };

  return {
    start,
    stop,
  };
};
