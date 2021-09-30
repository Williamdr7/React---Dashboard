import * as React from 'react'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

export default function SearchInput({ onChange, value, width, placeholder }) {
  return (
    <div className="inputContainer" style={{ width: width }}>
      <div className="defaultInput">
        <InputBase
          onChange={onChange}
          value={value}
          placeholder={placeholder ? placeholder : 'Buscar...'}
          inputProps={{ 'aria-label': 'Buscar...' }}
        />
        <IconButton
          style={{ left: width ? '0' : '30%' }}
          className="searchIcon"
          aria-label="search"
        >
          <SearchIcon className="searchIcon" />
        </IconButton>
      </div>
    </div>
  )
}
