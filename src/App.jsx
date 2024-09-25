import { Fragment, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductListpage from "./pages/productList";
import CartListPage from "./pages/cartList";
import ProductDetailPage from "./pages/productDetails";

function App() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <Fragment>
      {/* Buttons to navigate to different pages */}
      {/* <button onClick={() => navigate("/product-list")}>Go to Product List</button>
      <button onClick={() => navigate("/product-detail/1")}>Go to Product Details</button> */}

      <Routes>
        <Route path="/product-list" element={<ProductListpage />} />
        <Route path="/carts" element={<CartListPage />} />
        <Route path="/product-detail/:id" element={<ProductDetailPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
