import React from 'react';
import Products from '../Components/Products';
import SearchForm from '../Components/SearchForm/SearchForm'
function Home() {
  return <div>
    <SearchForm/>
      <Products/>
  </div>;
}

export default Home;
