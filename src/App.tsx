import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>("Aaron");

  const signIn = () => {
    setCurrentUser("Aaron");
  }

  const signOut = () => {
    setCurrentUser(null)
  }

  // todo decide if I want to only send 1 of these functions to NavBar

  return (
    <div className="App">
      <NavBar currentUser={currentUser} signIn={signIn} signOut={signOut}/>
      {
        currentUser &&
        <div>
          <SideBar />
          <SearchBar />
          <ProductList />
          <ProductDetail />
        </div>
      }
    </div>
  );
}

export default App;
