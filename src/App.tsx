import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import SideBar from './components/SideBar/SideBar';
import { getAllProducts, Product, EnrichedProduct, getProduct, StatusEnum } from './fakeAPI/allProducts';

import './stylesheets/index.css'

export enum FetchStatusEnum {
  notFetching,
  fetching
}

function App() {
  const [currentUser, setCurrentUser] = useState<string | null>("Aaron");
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<EnrichedProduct>()
  const [fetchStatus, setFetchStatus] = useState<FetchStatusEnum>(FetchStatusEnum.notFetching)
  const [query, setQuery] = useState<string>("")

  const signIn = () => {
    setCurrentUser("Aaron");
  }

  const signOut = () => {
    setCurrentUser(null)
  }

  const selectProduct = (id: string) => {
    setSelectedProduct({ id: id, name: "", price: null, isNew: false, status: StatusEnum.shipped, description: "", imageUrl: ""});
    setFetchStatus(FetchStatusEnum.fetching)
    getProduct(id)
    .then(data => {
      // is there a way to cancel this request / not actually get here so we don't actually setSelectedProduct()?
      // look up abort controllers
      // the other way to do it is to have another piece of local state in App (like const fetchStatus = useState(....)) 
      setSelectedProduct(data)
      setFetchStatus(FetchStatusEnum.notFetching)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const updateQuery = (newQuery: string) => {
    setQuery(newQuery)
  }

  // todo decide if I want to only send 1 of these functions to NavBar

  useEffect(() => {
    setFetchStatus(FetchStatusEnum.fetching)
    getAllProducts(query)
    .then(data => {
      console.log(data)
      setAllProducts(data)  // this updates the state on which the ProductList component relies
      setFetchStatus(FetchStatusEnum.notFetching)
    })
    .catch(e => {
      console.log(e)
    })
  }, [query])
// no dep => rerun every render
// empty dep arr => run only once

  return (
    <div className="App">
      <NavBar currentUser={currentUser} signIn={signIn} signOut={signOut}/>
      {
        currentUser &&
        <div>
          <SideBar />
          <SearchBar query={query} updateQuery={updateQuery} fetchStatus={fetchStatus} />
          <ProductList products={allProducts} selectedProductId={selectedProduct ? selectedProduct.id : ""}selectProduct={selectProduct} fetching={fetchStatus} />
          <ProductDetail selectedProduct={selectedProduct} fetching={fetchStatus} />
        </div>
      }
    </div>
  );
}

export default App;
