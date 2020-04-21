const { requireScope } = require('@codeday/graphql-auth');

const scopes = {
  judge: 'write:awards',
  feature: 'write:featured',
  writeAll: 'write:all',
  presentationUpload: ['write:presentations', 'write:all'],
};

const eventScopes = {
  write: ['volunteer', 'manager'],
  judge: ['judge', 'volunteer', 'manager'],
  mentor: ['judge', 'mentor', 'volunteer', 'manager'],
};

/**
 * Requires that the user can edit a project. The project ID is taken from the object context.
 *
 * @returns {Function} Resolver which throws an error if the condition is not met.
 */
module.exports.requireEditProject = () => ({ id }, _, { auth, user, dataSources: { projects } }) => {
  // Can the user edit all projects?
  if (auth.hasScope(scopes.writeAll)) return;

  // Get the event and users for this project
  const { eventId, Members: members } = projects.get(id);

  // Can the user edit all projects in this event?
  if (auth.hasEventScope(eventId, eventScopes.write)) return;

  // Is the user on this team?
  if (members.map((m) => m.userId === user.userId).reduce((accum, m) => m || accum, false)) return;

  // The user does not have edit access.
  throw new Error(`You don't have permission for that.`);
};

/**
 * Requires that the user can create new project in the event.
 *
 * @returns {Function} Resolver which throws an error if the condition is not met.
 */
module.exports.requireCreateProject = () => (_, { project: { eventId } }, { auth }) => (
  auth.requireScopeOrEvent(scopes.writeAll, eventId)
);

/**
 * Requires that the user can hand out awards.
 *
 * @returns {Function} Resolver which throws an error if the condition is not met.
 */
module.exports.requireJudgeProject = () => ({ id }, _, { auth }, { dataSources: { projects } }) => {
  const { eventId } = projects.get(id);
  auth.requireScopeOrEventScope(scopes.judge, eventId, eventScopes.judge);
};

/**
 * Requires that the user can upload presentation videos.
 *
 * @returns {Function} Resolver which throws an error if the condition is not met.
 */
module.exports.requirePresentationUploadProject = () => ({ id }, _, { auth }, { dataSources: { projects } }) => {
  const { eventId } = projects.get(id);
  auth.requireScopeOrEventScope(scopes.presentationUpload, eventId, eventScopes.write);
};

/**
 * Requires that the user can mark projects as featured.
 *
 * @param {string} eventId The event ID to check.
 * @returns {Function} Resolver which throws an error if the condition is not met.
 */
module.exports.requireFeatureProject = () => requireScope(scopes.feature);
