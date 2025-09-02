import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Bello Rasheed" age={31} bio="Loves coding and sports" />
      <Counter /> {/* new Counter component */}
      <Footer />
    </div>
  );
}

export default App;
