module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-config-styled-components'],
  syntax: 'scss',
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        // https://github.com/styled-components/stylelint-processor-styled-components/blob/99298fa77f87ce5dd6afc02fc0d521980909a9f0/test/options.test.js#L190-L210
        parserPlugins: [
          'jsx',
          'objectRestSpread',
          ['decorators', { decoratorsBeforeExport: true }],
          'classProperties',
          'exportExtensions',
          'asyncGenerators',
          'functionBind',
          'functionSent',
          'dynamicImport',
          'optionalCatchBinding',
          'optionalChaining',
          // Enable experimental feature
          'exportDefaultFrom',
          'nullishCoalescingOperator'
        ],
      }
    ]
  ],
};

