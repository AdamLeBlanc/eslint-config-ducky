module.exports = {
  extends: [...['./index'].map(require.resolve), 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  plugins: ['react'],
  rules: {
    'no-use-before-define': 'off',
    // it is better to not do this, but sometimes is needed. Use comments to show you meant to
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'error',
    // bad programmer. No. If you do this I'll spray you with water like a bad cat
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    // disable this at the top of the file if you have good reason. Should be something you communicate clearly
    'react/no-multi-comp': 'error',
    // extend React.Component not PureComponent if you implement shouldComponentUpdate
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-typos': 'warn', // I am bad for this... so I include
    'react/no-unescaped-entities': 'error',
    // no real reason to use ES5 classes... you already need babel for jsx
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'warn', // you almost always want to use stateless components when possible
    'react/react-in-jsx-scope': 'error',
    'react/prop-types': 'error',
    'react/require-default-props': ['error'],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error', // cleaner
    // this is picky on my part, but it makes it way easier to read
    // through complex components when the order is always the same
    'react/sort-comp': 'warn',
    'react/void-dom-elements-no-children': 'error', // just no.
    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error', // I know... picky, but this helps so much
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    // this is so bad for performance, you make a new closure on every render!
    // Use propery initializers, autobind decorators or call .bind(this) in the constructor
    'react/jsx-no-bind': 'error',
    // do it this way if you mean to do this
    // <div>{'/* This is my text that will show up*/'}</div>
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
  },
};
