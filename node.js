module.exports = {
  extends: [...['./index'].map(require.resolve), 'plugin:node/recommended'],
  plugins: ['node'],
  env: { node: true },
  rules: {
    // Node Specific
    'callback-return': 'warn', // better to warn for this because there can be false positives and it is more of a flag to catch possible mistakes
    'handle-callback-err': 'error',
    'no-path-concat': 'error', // use path.join(__dirname, 'file.js) or path.resovle(__dirname, "file.js")
    'no-sync': 'error', // disable with inline comment. You have to mean to do this
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/no-deprecated-api': 'error',
  },
};
