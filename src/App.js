import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Sidenav from "./component/Sidenav";
import AddPosts from "./pages/AddPosts";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [showSidenav, setShowSidenav] = useState(false);

  const toggleNavButton = () => {
    setShowSidenav(!showSidenav);
  };

  return (
    <>
      <Navbar toggleNavButton={toggleNavButton} />
      <Sidenav showSidenav={showSidenav} toggleNavButton={toggleNavButton} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/posts" component={ContentPage} />
        <Route path="/add-post" component={AddPosts} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
