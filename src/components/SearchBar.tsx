import React, { useState }  from 'react'
import "./SearchBar.css"


export const SearchBar = () => {
const [state, setState] = useState<string>('')

const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setState(e.target.value)
}

const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  localStorage.setItem('GUIDE', JSON.stringify(state))
  setState('')
}

  return (
    <div className='search-bar'>
      <form className='search-bar__form' onSubmit={submitHandler}>
       <input 
         className='search-bar__input'
         placeholder='Search bar design guide'
         value={state}
         onChange={inputChangeHandler}
         />
    </form>
    </div>
  )
}
