import React from 'react'
type Search ={
    setsearchData:React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({setsearchData}:Search) => {
  return (
    <div className="sm:w-60 w-80">
    <input type="text" placeholder="Search user profile ..." className="w-full p-2  border-2 border-light focus:border-white rounded-lg bg-transparent focus:text-white text-light  outline-none focus:outline-none" 
    onChange={(e)=> setsearchData(e.target.value)}
    />
    </div>
  )
}

export default SearchBar