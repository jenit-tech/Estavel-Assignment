import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StoneCategories from "./components/StoneCategories/StoneCategories";
import Features from "./components/Features/Features";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <StoneCategories />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
