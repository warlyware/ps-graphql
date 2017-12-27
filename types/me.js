const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'MeType',
  fields: {
    id: { type: GraphQLID },
    email: { type: new GraphQLNonNull(GraphQLString)},
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    fullName: {
      type: GraphQLString,
      resolve: objj => `${obj.firstName} ${obj.lastName}`
    },
    createdAt: { type: GraphQLString }
  }
});
