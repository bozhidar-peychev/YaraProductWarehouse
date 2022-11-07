import { useGetAllBooksQuery } from './generated/graphql';

function DisplayData() {
  const { data, loading } = useGetAllBooksQuery();

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  return (
    <div>
      {data &&
        data.books?.map((book, index) => {
          console.log({ book });

          return (
            <div key={index}>
              <h1>Title: {book?.title}</h1>
              <h1>Author: {book?.author?.username}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayData;
