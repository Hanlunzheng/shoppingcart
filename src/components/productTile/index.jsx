import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const ProductTile = ({ singleProductTile }) => {
  const { handleAddtoCart } = useContext(ShoppingCartContext);
  const handleProductDetailPage = (getCurrentProductId) => {
    console.log(getCurrentProductId);
    navigate(`/product-detail/${getCurrentProductId}`);
  };

  const navigate = useNavigate();

  return (
    <div className="relative group border border-cyan-600 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {singleProductTile?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            {singleProductTile?.price}$
          </p>
        </div>
      </div>
      <button
        onClick={() => handleProductDetailPage(singleProductTile?.id)}
        className="px-5 mt-5 w-full py-2 rounded-s-none bg-black text-white text-lg"
      >
        view details
      </button>
      <button
        onClick={() => handleAddtoCart(singleProductTile)}
        className="px-5 mt-5 w-full py-2 rounded-s-none bg-black text-white text-lg"
      >
        Add to carts
      </button>
    </div>
  );
};

export default ProductTile;
