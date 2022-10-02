import { createCore, startOpenType } from './core';

const core: startOpenType = createCore();

try {
  core.start();
  core.stop();
} catch (error: unknown) {
  console.log('[index] Uncaught Error');
  console.log(error);
}
