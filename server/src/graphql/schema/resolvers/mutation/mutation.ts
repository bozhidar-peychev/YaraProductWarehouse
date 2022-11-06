import { createAuthorMutationResolver } from "./createAuthorMutation";
import { createBookMutationResolver } from "./createBookMutation";

const mutation = {
  createBook: {
    resolve: createBookMutationResolver,
  },
  createAuthor: {
    resolve: createAuthorMutationResolver,
  },
};

export default mutation;
