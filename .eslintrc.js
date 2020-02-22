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
    }
  };