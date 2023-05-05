import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Details() {
  // here we can also get an error... 
  const { data, error  } = useSWR("/api/products", fetcher);
  console.log("data: ", data);

  const router = useRouter();
  // this has to be exactly the name of the name of the route in this case is [id] so I have to name my const {id}
  const { id } = router.query;

  // here I am finding the element that which id, is the same as the route one... so ele.id == to the const id that i just created
  // we put the ? next to data in case the data does not exist, then do not do anything.
  let element = data?.find((ele) => ele.id == id);

  if (!data) {
    return <h1>loading..</h1>;
  } 

  if(error) {
    console.log(error);
    return <h1>Something is wrong</h1>
  }
    return (  
      <>
        <h2>{element.name}</h2>
        <span>{element.price}</span>
        <span>{element.description}</span>
      </>
    );
  }
}
