import { IApolloServerContext } from "../interfaces/IApolloServerContext";
import prismaContext from "../prisma/prismaContext";

const apolloServerContext: IApolloServerContext = {
  prismaContext,
};

export default apolloServerContext;
