import { FC, useState, useEffect } from "react";
//just going to assume that we know the structure of the data returning
type ReturnedObject = { name: string; age: number };

export const FetchComponent: FC = () => {
  const [list, setList] = useState<ReturnedObject[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    // IIFE
    (async () => {
      try {
        const response = await fetch("https://api.example.com/data", {
          signal: controller.signal,
        });
        if (!response.ok)
          throw Error(`Api request failed with Status ${response.status}`);
        const data = await response.json();
        setList(data);
      } catch (error) {
        if (error instanceof Error) return setError(error.message);
        console.log(error);
      }
    })();
    //cancel api call if component unmounts
    () => controller.abort();
  }, []);

  //short circuit
  if (list.length === 0) return <section>...Loading</section>;
  if (error !== "") return <section>{error}</section>;

  return (
    <section>
      {list.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </div>
      ))}
    </section>
  );
};
