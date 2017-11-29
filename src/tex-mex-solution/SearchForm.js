import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '80%',
    padding: 10
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    padding: 10
  }
}

const SearchForm = ({ setMenuItemsToMedium, setMenuItemsToSpicy, setMenuItemsToMild, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList }) => {
  return (
    <div>
      <form style={styles.formContainer}>
        <div style={styles.filterContainer}> <input onChange={handleSearchTermChange} value={searchTerm} />
          <button type='button' onClick={updateMenuList}>Search</button>
          <button type='button' onClick={resetMenuList}>Reset</button>
        </div>
        <div style={styles.buttonContainer}>
          <button type='button' onClick={setMenuItemsToMild}>Only Mild</button>
          <button type='button' onClick={setMenuItemsToMedium}>Only Medium</button>
          <button type='button' onClick={setMenuItemsToSpicy}>Only Spicy</button>
        </div>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setMenuItemsToMild: PropTypes.func.isRequired,
  setMenuItemsToMedium: PropTypes.func.isRequired,
  setMenuItemsToSpicy: PropTypes.func.isRequired
}

export default SearchForm