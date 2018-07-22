# The Ducky EsLint Config

A eslint config for working with Node, React and Jest.

The available base config are:

- `ducky`
- `ducky/react`
- `ducky/node`

There is also a jest extension for writting test in jest that sets up eslint for that.

- `ducky/jest`

To setup add the following to your `.eslintrc`

- For just a base config, `"extends": "ducky"` (or whatever base config)
- To add jest `"extends: ["ducky/react", "ducky/jest"]`
