import React from 'react'
import IconSvg from '../../elements/svg'
const Search = () => {
  return (
    <div className='search'>
      <button className='search__btn'>
        <IconSvg name="search" />
      </button>
      <input className='text-400' type="text" placeholder="Search"></input>
    </div>
  )
}

export default Search
