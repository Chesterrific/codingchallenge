import React from 'react'

export default function Search({ search, setSearch, setCriteria }) {

  const seachInputHandler = (e) => {
    setSearch(e.target.value);
  }

  const criteriaHandler = (e) => {
    setCriteria(e.target.value);
  }

  return (
    <div>
      <div className='searchDetails'>
        <label>Search By:</label>
        <select name="searchCategories" onChange={criteriaHandler}>
          <option value="fName">First Name</option>
          <option value="lName">Last Name</option>
          <option value="amount">Amount</option>
        </select>
        <input type="text" onChange={seachInputHandler} value={search} />
      </div>
    </div>
  )
}
