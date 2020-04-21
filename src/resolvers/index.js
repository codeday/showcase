const { GraphQLDateTime } = require('graphql-iso-date');
const requireAll = require('../utils/require-all');

module.exports = {
  DateTime: GraphQLDateTime,
  ...requireAll(__filename).reduce(
    (a, b) => ({ ...a, ...b }),
    {}
  ),
};
