import type { UserConfig } from '@commitlint/types';

const commitlintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
};

// eslint-disable-next-line import/no-default-export
export default commitlintConfig;
