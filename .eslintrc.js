module.exports = {
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  root: true,
  rules: {
    'no-console': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
