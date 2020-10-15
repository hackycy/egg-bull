'use strict';

module.exports = {
  watchDirs: {
    model: {
      directory: 'app/queue',
      // generator name, eg: class、auto、function、object
      generator: 'auto',
      interface: 'IQueue',
      declareTo: 'Application.queue', // declare to this interface
      // watch: true, // whether need to watch files
      caseStyle: 'camel', // caseStyle for loader
      // interfaceHandle: val => `ReturnType<typeof ${val}>`, // interfaceHandle
      // trigger: ['add', 'unlink'], // recreate d.ts when receive these events, all events: ['add', 'unlink', 'change']
    },
  },
};
