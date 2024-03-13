import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilter } from '../../redux/filterSlice'

export const Filter = () => {
    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        dispatch(setFilter(event.target.value))
    }

    return (
        <div>
            <p>Find contacts by name</p>
            <input
                className="filter"
                name="filter"
                onChange={handleInputChange}
            />
        </div>
    )
}