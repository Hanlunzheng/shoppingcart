//create the context
//provide the state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);

  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const fetchListOfProducts = async () => {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();

    if (result && result?.products) {
      setListOfProducts(result?.products);
      setLoading(false);
    }
  };

  const handleAddtoCart = (getProductDetails) => {
    console.log(getProductDetails);

    let cpyExistingCartsItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartsItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    console.log(findIndexOfCurrentItem);
    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartsItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
      console.log("it is coming here");

      cpyExistingCartsItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartsItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartsItems[findIndexOfCurrentItem].quantity + 1,
        totalPrice:
          (cpyExistingCartsItems[findIndexOfCurrentItem].quantity + 1) *
          cpyExistingCartsItems[findIndexOfCurrentItem].price,
      };
    }
    // console.log(cpyExistingCartsItems, "copy existing cart");
    setCartItems(cpyExistingCartsItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartsItems));
    navigate("/carts");
  };

  const handleRemoveFromCart = (getProductDetails, isFullyRemoveFromCart) => {
    let cpyExistingCartsItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartsItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    if (isFullyRemoveFromCart) {
      cpyExistingCartsItems.splice(findIndexOfCurrentItem, 1);
    } else {
      cpyExistingCartsItems[findIndexOfCurrentItem] = {
        ...cpyExistingCartsItems[findIndexOfCurrentItem],
        quantity: cpyExistingCartsItems[findIndexOfCurrentItem].quantity - 1,
        totalPrice:
          (cpyExistingCartsItems[findIndexOfCurrentItem].quantity - 1) *
          (cpyExistingCartsItems[findIndexOfCurrentItem].price - 1),
      };
    }

    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartsItems));
    setCartItems(cpyExistingCartsItems);
  };

  useEffect(() => {
    fetchListOfProducts();

    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);

  console.log(cartItems);

  return (
    <ShoppingCartContext.Provider
      value={{
        loading,
        listOfProducts,
        setLoading,
        productDetails,
        setListOfProducts,
        setProductDetails,
        handleAddtoCart,
        cartItems,
        setCartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartProvider;
