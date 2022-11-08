import { GraphQLBoolean, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateProductInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateProductInput',
  description: 'Create product input',
  fields: {
    hazardous: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'The products hazardous status',
    },
    productName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The product Name',
    },
  },
});

export default CreateProductInput;
