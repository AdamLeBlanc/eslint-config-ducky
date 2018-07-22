module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: 'impliedStrict',
  },
  rules: {
    // Possible Errors
    // defaults are fine
    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error', // return null; instead of return;
    curly: ['error', 'multi-or-nest', 'consistent'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'no-alert': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-labels': 'error',
    'no-loop-func': 'error',
    'no-proto': 'error', // user Object.getPrototypeOf(Obj)
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error', // same as eval()
    'no-sequences': 'error',
    'no-throw-literal': 'error', // do not -> throw "Error", do -> throw new Error('error')
    'no-void': 'error',
    radix: ['error', 'always'],
    'vars-on-top': 'error',
    // Variables
    'no-delete-var': 'error',
    'no-undefined': 'error', // treat undefined as a reserved word
    // Styleistic Issues
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 'error',
    'comma-dangle': ['error', 'always-multiline'], // Makes diffs much more readable
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'], // We're all adults here. Lets be reasonable
    'eol-last': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'lines-between-class-members': ['warn', 'always'],
    'new-parens': 'error',
    'no-bitwise': 'error', // override this with a comment if you need it but it is generally a mistake
    'no-continue': 'error', // refactor... makes code hard to read
    'no-lonely-if': 'error',
    'no-tabs': 'error', // I picked one, sue me (please don't use at your own risk).
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    semi: 'error', // I am personally not a big fan of ASI as semi-colons are more explicit
    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'prefer-const': 'warn',
    'prefer-rest-params': 'error', // so much more clear and does not require your team members to know about `arguments`
    'prefer-spread': 'error', // again, way easier on the eyes
    'prefer-template': 'error', // it is 2018+, we don't use "a" + b; anymore.
  },
};
