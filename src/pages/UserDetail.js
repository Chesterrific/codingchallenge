import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataFile from '../data/fe_challenge_sample_data.json';
import CurrencyFile from '../data/currency_symbols.json';

// Components
import AddressPipe from '../components/AddressPipe.js';
import AmountPipe from '../components/AmountPipe.js';

export default function UserDetail() {

  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [person, setPerson] = useState([]);
  // Grab parameters from url
  const { fname, lname, age } = useParams();

  // Faux establish connection with server for json file data
  useEffect(() => {
    setData(DataFile);
    setCurrency(CurrencyFile);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    // Grab user data using given parameters.
    setPerson(data.filter(item => item.first_name.toLowerCase().includes(fname.toLowerCase())
      && item.last_name.toLowerCase().includes(lname.toLowerCase())
      && parseFloat(item.age) === parseFloat(age)));
    console.log(person);
  }, [loaded])

  return (
    <div className='userDetails'>
      {loaded ?
        person.map((item) => {
          return (
            <div className='dataEntry'>
              <div>{item.first_name}</div>
              <div>{item.last_name}</div>
              <AddressPipe
                address={item.address}
              />
              <div>{item.gender}</div>
              <div>{item.age}</div>
              <AmountPipe
                order={item.order_total}
                currency={currency}
              />
            </div>
          )
        })
        :
        <div>Loading</div>
      }
    </div>

  )
}
