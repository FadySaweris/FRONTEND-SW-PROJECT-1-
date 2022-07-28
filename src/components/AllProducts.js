import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "semantic-ui-react";

const AllProducts = ({ category, products }) => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h1 className="text-2xl">{category?.toUpperCase()}</h1>

      <div className="mt-8 flex items-center justify-around gap-4 flex-wrap">
        {products?.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductItem = ({ product, currency = "USD" }) => {
  const history = useHistory()

  return (
    <div className="my-10 group hover:shadow-md rounded-md px-4 py-6 cursor-pointer" onClick={() => history.push(`/product/${product.id}`)}>
      <img className="w-80 h-56 object-cover" src={product.gallery[0]} alt='product preview' />
      <div className="relative">
        <p className="text-gray-500 mt-4">{product.name}</p>
        <p className="mt-1">
          {
            product.prices.filter((pp) => pp.currency.label === currency)[0]
              ?.amount
          }{" "}
          {currency}
          <span className="hidden group-hover:block absolute -top-5 right-5 rounded-full bg-green-600 h-8 w-8 text-white">
            Icon
          </span>
        </p>
      </div>
    </div>
  );
};

export default AllProducts;
