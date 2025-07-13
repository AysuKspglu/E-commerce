import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import PageContent from "./Layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Added to cart:", product);
  };

  return (
    <Router>
      <div className="min-h-screen w-full bg-white flex flex-col">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/shop/:category/:group"
              render={(props) => <ProductListPage {...props} onAddToCart={handleAddToCart} />}
            />
            <Route
              exact
              path="/shop/:category/:group/:productId"
              component={ProductDetailPage}
            />
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
