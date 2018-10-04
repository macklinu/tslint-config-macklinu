module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-config-prettier',
    'tslint-plugin-prettier',
  ],
  rules: {
    prettier: true,
    'interface-name': [true, 'never-prefix'],
    'object-literal-sort-keys': false,
  },
}
