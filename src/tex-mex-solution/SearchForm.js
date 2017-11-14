import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({setMenuItemsToMild, resetMenuList, handleSearchTermChange, updateMenuList, searchTerm}) => {
  return (
    <div>
      <input onChange={handleSearchTermChange} value={searchTerm}/>
      <button type='button' onClick={updateMenuList}>Search</button>
      <button type='button' onClick={resetMenuList}> RESET </button>
      <button type='button' onClick={setMenuItemsToMild}>Only Mild</button>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.string.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setMenuItemsToMild: PropTypes.func.isRequired
}

export default SearchForm