import React, { useState, useEffect } from 'react';
import DataFile from '../data/fe_challenge_sample_data.json';

export default function Welcome() {

  // var datafile = require('../data/fe_challenge_sample_data.json');

  const [data, setData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setData(DataFile);
    setLoaded(true);
  }, []);

  const seachInputHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div className='welcome centered'>
      <label>Search</label>
      <input type="text" onChange={seachInputHandler} value={search} />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Order Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {loaded ?
          <tbody>
            {data.map((item, key) => {
              return (
                <tr key={key++}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.address.address1 + ' ' + item.address.address2}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>{item.order_total.amount}</td>
                  <td>{item.order_total.currency}</td>
                </tr>
              )
            })}
          </tbody>
          :
          <div>Loading</div>
        }
      </table>
    </div>
  )
}