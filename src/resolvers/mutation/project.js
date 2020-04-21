const { combineResolvers } = require('graphql-resolvers');
const {
  requireEditProject,
  requireJudgeProject,
  requirePresentationUploadProject,
  requireFeatureProject,
} = require('../auth');

exports.ProjectMutation = {};


//
// Edit and delete the project
//

exports.ProjectMutation.edit = combineResolvers(
  requireEditProject(),
  ({ id }, { team: edits }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.delete = combineResolvers(
  requireEditProject(),
  ({ id }, _, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);


//
// Uploads
//

exports.ProjectMutation.uploadScreenshot = combineResolvers(
  requireEditProject(),
  ({ id }, { image }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.removeScreenshot = combineResolvers(
  requireEditProject(),
  ({ id }, { id: imageId }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.uploadPhoto = combineResolvers(
  requireEditProject(),
  ({ id }, { image }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.removePhoto = combineResolvers(
  requireEditProject(),
  ({ id }, _, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.uploadDemoVideo = combineResolvers(
  requireEditProject(),
  ({ id }, { video }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.removeDemoVideo = combineResolvers(
  requireEditProject(),
  ({ id }, _, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.uploadPresentationVideo = combineResolvers(
  requirePresentationUploadProject(),
  ({ id }, { video }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.removePresentationVideo = combineResolvers(
  requirePresentationUploadProject(),
  ({ id }, _, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);


//
// Special
//

exports.ProjectMutation.addAward = combineResolvers(
  requireJudgeProject(),
  ({ id }, { id: awardId, subclass }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);
exports.ProjectMutation.removeAward = combineResolvers(
  requireJudgeProject(),
  ({ id }, { id: awardId }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);

exports.ProjectMutation.setFeatured = combineResolvers(
  requireFeatureProject(),
  ({ id }, { featured }, { dataSources: { projects } }) => true // TODO(@tylermenezes)
);
