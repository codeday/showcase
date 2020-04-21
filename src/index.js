/* eslint-disable no-console */
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { context } = require('@codeday/graphql-auth');
const dataSources = require('./datasources');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const config = require('./config');

const server = new ApolloServer({
  dataSources: () => dataSources,
  typeDefs,
  resolvers,
  context: context(config.auth0.audience, config.auth0.issuer),
  subscriptions: {
    onConnect: () => true,
  },
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀  To the moon! ${url}`);
  console.log(`    Subscriptions ready at ${subscriptionsUrl}`);
});
