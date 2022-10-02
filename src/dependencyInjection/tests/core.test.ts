import { createCore, startOpenType } from '../core';

const createMock = (): startOpenType => {
  const start = (): void => {
    console.log('[database_mock] Starting');
  };

  const stop = (): void => {
    console.log('[database_mock] Stopping');
  };

  return {
    start,
    stop,
  };
};

describe('', () => {
  test('', () => {
    const databaseMock: startOpenType = createMock();
    const webserverMock: startOpenType = createMock();

    const core: startOpenType = createCore({
      database: databaseMock,
      webserver: webserverMock,
    });

    expect(() => core.start()).not.toThrow();
  });
});
