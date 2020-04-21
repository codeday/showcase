const requireAll = require('../utils/require-all');

module.exports = [
  'scalar DateTime',
  ...requireAll(__filename, __dirname),
];
