import { getAllAuthorsResolver } from "./getAllAuthorsQuery";
import { getAllBooksQueryResolver } from "./getAllBooksQuery";

const query = {
  books: {
    resolve: getAllBooksQueryResolver,
  },
  authors: {
    resolve: getAllAuthorsResolver,
  },
};

export default query;
