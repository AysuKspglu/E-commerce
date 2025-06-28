import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import PageContent from "./Layout/PageContent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* Diğer sayfalar buraya eklenebilir */}
          </Switch>
        </PageContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;