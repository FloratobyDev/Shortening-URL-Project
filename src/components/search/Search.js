import React from 'react'
import AdvanceStatisticsComponent from './AdvanceStatisticsComponent'
import SearchInputComponent from './SearchInputComponent'
import './searchStyle.scss'

const Search = () => {

    return (
        <div className='SEARCH'>
            <SearchInputComponent />
            <AdvanceStatisticsComponent />
        </div>
    )
}

export default Search