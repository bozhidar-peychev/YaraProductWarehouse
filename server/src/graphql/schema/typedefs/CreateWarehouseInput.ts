import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql';

const CreateWarehouseInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateWarehouseInput',
  description: 'Create warehouse input',
  fields: {
    maxStockLevel: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The warehouse's max stock level",
    },
    hazardous: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Is the warehouse hazardous',
    }
  },
});

export default CreateWarehouseInput;
