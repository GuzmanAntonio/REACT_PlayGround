import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ handleSearchTermChange, updatedMenuList }) => {
  return (
    <div>
      <input onChange={handleSearchTermChange} />
      <button type='button' onClick={updatedMenuList}>Search</button>
    </div>
  )
}

SearchForm.PropTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updatedMenuList: PropTypes.string.isRequired
}

export default SearchForm
