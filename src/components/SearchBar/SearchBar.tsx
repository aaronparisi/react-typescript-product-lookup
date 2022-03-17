import React, { useState } from 'react'
import { FetchStatusEnum } from '../../App'

interface ISearchBarProps {
  query: string,
  updateQuery: (newQuery: string) => void,
  fetchStatus: FetchStatusEnum
}

const SearchBar: React.FC<ISearchBarProps> = ({ query, updateQuery, fetchStatus }) => {
  const [searchBarText, setSearchBarText] = useState<string>(query)

  const handleQueryChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // TODO implement some logic here to throttle this a little bit (debounce?)
    updateQuery(searchBarText)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleQueryChange}>
        <input 
          type="text" 
          name="" id="" 
          placeholder='search' 
          disabled={fetchStatus === FetchStatusEnum.fetching}
          value={searchBarText}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchBarText(e.currentTarget.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar