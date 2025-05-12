import { defineConfig } from 'rollup';

import { LEGACY_CONFIG, MODERN_CONFIG } from './rollupConfigs';

const rollupConfig = defineConfig([...LEGACY_CONFIG, ...MODERN_CONFIG]);

// eslint-disable-next-line import-x/no-default-export
export default rollupConfig;
