import { Route } from "react-router-dom";
import LazyLoad from "../../src/utils/lazies/Lazy";

export default (
  <>
    <Route
      path="/collections/:categoryId"
      element={LazyLoad(
        () => import("../../src/pages/product/collections/Product")
      )()}
    ></Route>
    <Route
      path="/products/:id"
      element={LazyLoad(
        () => import("../../src/pages/product/productDetail/ProductDetail")
      )()}
    ></Route>
  </>
);
