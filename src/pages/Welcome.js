import React, { useState, useEffect } from 'react';

// Components
import Data from '../components/Data.js';
import Search from '../components/Search.js';

export default function Welcome({ data, currency, loaded }) {

  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState('');
  const [criteria, setCriteria] = useState('fName');

  // Copy data into filteredList state.
  useEffect(() => {
    if (!loaded) {
      return;
    }
    setFilteredList(data);
  }, [loaded])

  // Filter through data everytime "search" and "criteria" change.
  useEffect(() => {
    searchDetailHandler();
  }, [search, criteria]);

  // Switch list filter based on "criteria".
  const searchDetailHandler = () => {
    switch (criteria) {
      case 'fName':
        setFilteredList(data.filter(item => item.first_name.toLowerCase().includes(search.toLowerCase())));
        break;
      case 'lName':
        setFilteredList(data.filter(item => item.last_name.toLowerCase().includes(search.toLowerCase())));
        break;
      case 'amount':
        if (search === '') {
          setFilteredList(data);
          break;
        }
        setFilteredList(data.filter(item => item.order_total.amount === parseFloat(search)));
        break;
      default:
        setFilteredList(data);
        break;
    }
  }

  return (
    <div className='welcome centered'>
      <Search
        search={search}
        setSearch={setSearch}
        setCriteria={setCriteria}
      />
      <Data
        loaded={loaded}
        filteredList={filteredList}
        currency={currency}
      />
    </div>
  )
}