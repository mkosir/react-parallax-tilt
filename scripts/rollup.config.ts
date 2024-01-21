import { defineConfig } from 'rollup';

import { LEGACY_CONFIG, MODERN_CONFIG } from './configs';

const rollupConfig = defineConfig([...LEGACY_CONFIG, ...MODERN_CONFIG]);

// eslint-disable-next-line
export default rollupConfig;
