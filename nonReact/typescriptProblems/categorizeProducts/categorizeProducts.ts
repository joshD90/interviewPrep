interface Product {
  name: string;
  price: number;
  category: string;
}

function categorizeProducts(products: Product[]): {
  [category: string]: Product[];
} {
  const categorizedProducts: { [category: string]: Product[] } = {};
  // Your code here
  products.forEach((product) => {
    if (!categorizedProducts[product.category])
      categorizedProducts[product.category] = [];
    categorizedProducts[product.category].push(product);
  });
  return categorizedProducts;
}

const products: Product[] = [
  { name: "Product A", price: 10, category: "Electronics" },
  { name: "Product B", price: 20, category: "Clothing" },
  { name: "Product C", price: 15, category: "Electronics" },
  { name: "Product D", price: 30, category: "Clothing" },
  { name: "Product E", price: 25, category: "Electronics" },
];

const categorized = categorizeProducts(products);
console.log(categorized);

// Expected output:
// {
//   "Electronics": [
//     { name: 'Product A', price: 10, category: 'Electronics' },
//     { name: 'Product C', price: 15, category: 'Electronics' },
//     { name: 'Product E', price: 25, category: 'Electronics' }
//   ],
//   "Clothing": [
//     { name: 'Product B', price: 20, category: 'Clothing' },
//     { name: 'Product D', price: 30, category: 'Clothing' }
//   ]
// }
