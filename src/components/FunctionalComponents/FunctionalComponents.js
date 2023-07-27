import { useState } from "react";
import Product from "../Product/Product";

const FunctionalComponent = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "99 $" },
    { title: "Node.js", price: "89 $" },
    { title: "JavaScript", price: "79 $" },
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "React.js", price: "89 $" },
      { title: "Node.js", price: "79 $" },
      { title: "JavaScript", price: "69 $" },
    ]);
  };
  return (
    <div>
      <h1>shopping App</h1>
      {products.map((product) => {
        return <Product name={product.title} price={product.price} />;
      })}
      <button onClick={clickHandler}>Change Price</button>
    </div>
  );
};

export default FunctionalComponent;
