import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../components/cartTile";

const CartListPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  console.log(cartItems);
  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-sxl font-bold text-gray-800 text-center">
        Cart list page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {cartItems?.length > 0 ? (
            cartItems.map((singleCartItem) => (
              <CartTile singleCartItem={singleCartItem} />
            ))
          ) : (
            <h1> No item available in cart page </h1>
          )}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max ">
          <h3 className="text-xl font-extralight text-gray-500 border-b">
            Order summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2 ">
            <p className="flex flex-wrap gap-4 text-sm font-bold ">
              Total
              <span>
                $
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="mt-5 flex gap-2">
            <button
              disabled={cartItems.length === 0}
              className=" disabled:opacity-60 text-sm px-4 py-3 bg-black text-white font-extralight"
            >
              CheckOut
            </button>
            <button
              onClick={() => navigate("/product-list")}
              className="text-sm px-4 py-3 bg-black text-white font-extralight"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListPage;
