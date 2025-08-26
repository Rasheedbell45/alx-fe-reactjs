import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </div>
    
    <div>
      <h1>User Profiles</h1>

      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys coding, chess, and reading books"
      />

      <UserProfile
        name="Charlie"
        age="28"
        bio="Passionate about traveling and food blogging"
      />
    </div>
  );
}

export default App;
