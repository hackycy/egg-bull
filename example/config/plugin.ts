import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  bull: {
    enable: true,
    package: '@hackycy/egg-bull',
  },
};

export default plugin;
