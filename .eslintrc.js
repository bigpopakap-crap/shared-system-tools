module.exports = {
    extends: [
      '@bigpopakap/eslint-config/node'
    ],
   
    // Optional, but useful to help ESLint resolve absolute path imports,
    // matching whatever path is in your `tsconfig.json#compilerOptions#baseUrl`.
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"]
        }
      },
    },

    rules: {
        // Since this repo is mostly configs written in Javascript instead of Typescript
        // without fancy module imports
        '@typescript-eslint/no-var-requires': 'off',
    }
  };