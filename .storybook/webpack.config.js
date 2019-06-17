module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [require.resolve('ts-loader')]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  return config;
};
