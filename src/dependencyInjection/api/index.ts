type createWebServerReturn = { start: () => void; stop: () => void };

export const createWebServer = (): createWebServerReturn => {
  const start = (): void => {
    console.log('> [webserver] Starting');
    console.log('> [webserver] Waiting for connections');
    console.log('> [webserver] Starting done!');
  };

  const stop = (): void => {
    console.log('> [webserver] Stopping...');
    console.log('> [webserver] Waiting all clients disconnect');
    console.log('> [webserver] Close all ports');
    console.log('> [webserver] Stopping done!');
  };

  return {
    start,
    stop,
  };
};
