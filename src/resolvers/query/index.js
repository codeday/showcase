const { combineResolvers } = require('graphql-resolvers');
const { requireLoggedIn } = require('@codeday/graphql-auth');

exports.Query = {};
exports.Query.project = (_, { id }, { dataSources: { projects } }) => projects.get(id);
exports.Query.projects = (_, { where }, { dataSources: { projects } }) => projects.find(where);
exports.Query.myProjects = combineResolvers(
  requireLoggedIn(),
  (_, __, { user: { userId }, dataSources: { projects } }) => true
);
