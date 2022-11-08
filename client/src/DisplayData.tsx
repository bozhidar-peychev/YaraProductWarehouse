import { useProductsQuery } from './graphql/generated/graphql';

function DisplayData() {
  const { data, loading } = useProductsQuery();

  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }

  if (!data?.products || data.products.length === 0) return <h1> NO DATA</h1>;

  return (
    <div>
      {data &&
        data.products &&
        data.products.map((product, index) => {
          console.log({ product });

          return (
            product && (
              <div key={product?.productId}>
                {Object.entries(product).map((key, i) => (
                  <h1>{`${key}: ${Object.values(product)[i]}`}</h1>
                ))}
              </div>
            )
          );
        })}
    </div>
  );
}

export default DisplayData;
