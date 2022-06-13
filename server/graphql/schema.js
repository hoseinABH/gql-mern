const { clients, projects } = require('../sampleData');
const { GraphQLObjectType, GraphQLID } = require('graphql');

// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({ id: { type: GraphQLID } }),
});
