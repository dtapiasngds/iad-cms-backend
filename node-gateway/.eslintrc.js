module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint/eslint-plugin'],
  env: {
    node: true,
  },
  rules: {
    // Puedes añadir reglas personalizadas aquí
  },
};
