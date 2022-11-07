import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

const CreateProductInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateProductInput',
  description: 'Create product input',
  fields: {
    hazardous: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Is the warehouse hazardous',
    }
  },
});

export default CreateProductInput;
