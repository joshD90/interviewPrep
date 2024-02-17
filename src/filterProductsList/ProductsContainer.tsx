import { useState } from "react";
import { TProductMapped, products } from "./products";
import { Product } from "./Product";

export const ProductsContainer = () => {
  const [displayProducts, setDisplayProducts] = useState<
    Map<string, TProductMapped[]>
  >(() => {
    const productMap = new Map<string, TProductMapped[]>();
    products.forEach((product) => {
      const { category, ...rest } = product;
      const alreadyExistingCategory = productMap.get(category);
      if (!alreadyExistingCategory) {
        productMap.set(category, [rest]);
      } else {
        productMap.set(category, [...alreadyExistingCategory, rest]);
      }
    });
    return productMap;
  });

  const [nameFilter, setNameFilter] = useState("");

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  return (
    <section>
      <form action="">
        <input type="text" onChange={handleNameFilterChange} />
      </form>
      <div>
        {Array.from(displayProducts.keys()).map((key) => {
          return (
            <div key={key}>
              <h2>{key}</h2>
              <div>
                {displayProducts.get(key) &&
                  displayProducts
                    .get(key)
                    ?.map((item) => (
                      <Product
                        item={item}
                        key={item.name}
                        nameFilter={nameFilter}
                      />
                    ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
