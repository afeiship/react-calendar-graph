const fs = require('fs');
const indentString = require('indent-string');

require('@jswork/next-replace-in-file');

nx.declare({
  statics: {
    init: function () {
      var instance = new this();
      instance.reset();
      instance.replace();
    }
  },
  methods: {
    reset: function () {
      fs.copyFileSync('./scripts/TEMPLATE.md', './README.md');
    },
    replace: function () {
      const docApp = fs.readFileSync('./public/src/app.tsx').toString();

      nx.replaceInFile('README.md', [
        ['__GENERATE_DAPP__', indentString(docApp, 2)],
        ['@/main', '@jswork/react-calendar-graph']
      ]);
    }
  }
});
