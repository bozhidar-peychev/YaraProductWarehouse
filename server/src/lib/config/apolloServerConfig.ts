import schema from "../../../src/graphql/schema";
import apolloServerContext from "./apolloServerContext";

const apolloServerConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
};

export default apolloServerConfig;
