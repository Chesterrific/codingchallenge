import React, { useState, useEffect } from 'react';
import DataFile from '../data/fe_challenge_sample_data.json';
import CurrencyFile from '../data/currency_symbols.json';

// Components
import Data from '../components/Data.js';
import Search from '../components/Search.js';

export default function Welcome() {

  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState('');
  const [currency, setCurrency] = useState([]);
  const [criteria, setCriteria] = useState('fName');
  const [loaded, setLoaded] = useState(false);

  // Load Data into state.
  useEffect(() => {
    setData(DataFile);
    setCurrency(CurrencyFile);
    setLoaded(true);
  }, []);

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