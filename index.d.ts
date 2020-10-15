import { QueueOptions } from "bull";

declare module 'egg' {

  interface EggAppConfig {
    bull: {
      // Queue dafault
      default?: QueueOptions
    },
  }
}
