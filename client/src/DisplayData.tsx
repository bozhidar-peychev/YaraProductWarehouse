import { gql, useQuery } from '@apollo/client';

const QUERY_ALL_BOOKS = gql`
	query GetBooks {
		books {
			title
			author
		}
	}
`;

function DisplayData() {
	const { data, loading } = useQuery(QUERY_ALL_BOOKS);

	if (loading) {
		return <h1> DATA IS LOADING...</h1>;
	}

	return (
		<div>
			{data &&
				data.books.map(
					(book: { title: string; author: string }, index: number) => {
						return (
							<div key={index}>
								<h1>Title: {book.title}</h1>
								<h1>Author: {book.author}</h1>
							</div>
						);
					}
				)}
		</div>
	);
}

export default DisplayData;
