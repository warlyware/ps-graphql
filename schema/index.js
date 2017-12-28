const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const pgdb = require('../database/pgdb');

const MeType = require('../types/me');

// Starting Point
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    me: {
      type: MeType,
      description: 'The current user identified by an API key.',
      args: {
        key: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (obj, args, { pgPool }) => {
        return pgdb(pgPool).getUser(args.key);
      },
    },
  },
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = ncSchema;
