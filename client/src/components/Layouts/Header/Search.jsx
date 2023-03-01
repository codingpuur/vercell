import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/products/${keyword}`)
        } else {
            navigate('/products');
        }
    }
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  
    function toggleSearchBarVisibility() {
        setIsSearchBarVisible(!isSearchBarVisible);
    }
  return (
    <form  onSubmit={handleSubmit} className="relative">
    <span
      className="absolute inset-y-0 right-5 pl-3 flex items-center"
      onClick={toggleSearchBarVisibility}
    >
        <button type='submit'>

  <ion-icon style={{color:"black"}}   name="search"></ion-icon>
        </button>
    </span>
    <input
    value={keyword} onChange={(e) => setKeyword(e.target.value)}
      className={`${
        isSearchBarVisible ? "block" : "hidden"
      } sm:block w-64 px-4 py-2 rounded-lg border border-gray-300 shadow-lg placeholder-gray-400`}
      type="text"
      placeholder="Search"
    //   onClick={(e) => e.stopPropagation()}
    />
  </form>




  )
}

export default Search