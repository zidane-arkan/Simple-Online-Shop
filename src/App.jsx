import { useState } from "react";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";

function App() {
  return (
    // <CartContext.Consumer> (contextName) => { return {<COMPONENTS />} } </CartContext.Consumer>
    <CartContextProvider>
      <Header
      // cart={shoppingCart}
      // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {/* Component Composition = Not Recommended
         */}
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
