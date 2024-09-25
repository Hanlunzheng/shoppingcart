import React from "react";
import { useContext } from "react";
import ProductTile from "../../components/productTile";
import { ShoppingCartContext } from "../../context";

const ProductListpage = () => {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  console.log(listOfProducts, loading);

  if (loading) return <h1>data is loading please wait!</h1>;

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
            Our feature product
          </h2>
        </div>

        {/* category filter */}
        {/* <div className="flex justify-center space-x-4 mt-8">
          <button onClick={handleCategoryFilter}>filter category</button>
        </div> */}

        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProductTile) => (
              <ProductTile
                singleProductTile={singleProductTile}
                key={singleProductTile.id}
              />
            ))
          ) : (
            <h3>No product founded</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListpage;
