import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';

import { performAstCodegen } from './codegen';
import apolloServerConfig from './lib/config/apolloServerConfig';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const server = new ApolloServer(apolloServerConfig);

  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error launching server', err));
};

startServer();
