const { combineResolvers } = require('graphql-resolvers');
const { requireCreateProject } = require('../../auth');

const Mutation = {};
module.exports.Mutation = Mutation;

Mutation.createProject = combineResolvers(
  requireCreateProject(),
  (_, { project }, __, { dataSources: { projects } }) => projects.create(project)
);
