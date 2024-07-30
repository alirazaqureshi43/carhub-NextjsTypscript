'use client'
import {SearchManufacturer} from '@/components/index'
const SearchBar = () => {
  const handleSubmit = () =>{

  }
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className="searchbar__item">
          <SearchManufacturer/>
      </div>
    </form>
  )
}

export default SearchBar