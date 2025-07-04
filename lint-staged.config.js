export default {
  '*.{ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    () => 'tsc -p tsconfig.json --noEmit',
    'vitest related --run',
  ],
};
