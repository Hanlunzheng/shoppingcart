import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    handleAddtoCart,
  } = useContext(ShoppingCartContext);

  const fetchProductDetails = async () => {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();

    if (result) {
      setProductDetails(result);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <h1>Product is loading please wait</h1>;
  }

  return (
    <div className="">
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-lg p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-sm relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {/* {productDetails?.images.map(imageItem=> ) } */}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extralight">
              {productDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">{productDetails?.price}</p>
            </div>
            <div className="">
              <button
                onClick={() => handleAddtoCart(productDetails)}
                className="min-w-[200px] px-4 py-3 border-[#333] bg-transparent text-sm font-semibold rounded mt-5"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
