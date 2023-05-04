import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const { data } = useSWR("/api/products", fetcher);
  console.log("data: ", data);

  if (data) {
    return (
      <ul>
        {data.map((product, index) => {
          return (
            <li key={index}>
              <h2>{product.name}</h2>
              <span>{product.id}</span>
              <span>{product.price}</span>
            </li>
          );
        })}
      </ul>
    );
  } else {
    <h1>loading...</h1>;
  }
}
