import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import DataFile from '../data/fe_challenge_sample_data.json';
// import CurrencyFile from '../data/currency_symbols.json';

// Components
import AmountPipe from '../components/AmountPipe.js';

export default function UserDetail({ data, currency, loaded }) {

  // States
  // const [data, setData] = useState([]);
  // const [currency, setCurrency] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const [person, setPerson] = useState([]);
  const [edit, setEdit] = useState(true);

  const [name, setName] = useState('');

  // Grab parameters from url
  const { fname, lname, age } = useParams();

  // Faux establish connection with server for json file data
  useEffect(() => {
    console.log(data);
    setTimeout(() => {
      setPerson(data.filter(item => item.first_name.toLowerCase().includes(fname.toLowerCase())
        && item.last_name.toLowerCase().includes(lname.toLowerCase())
        && parseFloat(item.age) === parseFloat(age)));
      console.log(person);
      setTimeout(() => {
        setName(person.map((item) => { return item.first_name }));
      }, 1500);
      console.log(name);
    }, 1000);
  }, []);

  const fnameHandler = (e) => {
    setName(e.target.value);
  }

  const submitHandler = () => {
    console.log('submit');
    console.log(name);
  }

  const deleteHandler = () => {
    console.log('delete');
  }

  return (
    <div className='userDetailWrapper'>
      <h1>User Details</h1>
      <div className='options'>
        <button onClick={submitHandler}>Submit Changes</button>
        <button onClick={deleteHandler}>Delete User</button>
      </div>
      {loaded ?
        person.map((item) => {
          return (
            <div className='userDetails' key={item.first_name + item.last_name + item.age}>
              <div className='userDetail' id='fname'>
                <label>First Name: </label>
                <input type="text" value={name} onChange={fnameHandler} />
              </div>
              {/* <div className='userDetail' id='lname'>
                <label>Last Name: </label>
                <input type="text" value={item.last_name} />
              </div>
              <div className='userDetail' id='address1'>
                <label>Street Address: </label>
                <input type="text" value={item.address.address1} />
              </div>
              <div className='userDetail' id='apt'>
                <label>Apt: </label>
                <input type="text" value={item.address.address2} />
              </div>
              <div className='userDetail' id='city'>
                <label>City: </label>
                <input type="text" value={item.address.city} />
              </div>
              <div className='userDetail' id='state'>
                <label>State: </label>
                <input type="text" value={item.address.state} />
              </div>
              <div className='userDetail' id='zip'>
                <label>ZIP Code: </label>
                <input type="text" value={item.address.zip} />
              </div>
              <div className='userDetail' id='gender'>
                <label>Gender: </label>
                <input type="text" value={item.gender} />
              </div>
              <div className='userDetail' id='age'>
                <label>Age: </label>
                <input type="text" value={item.age} />
              </div>
              <div className='userDetail' id='orderTotal'>
                <label>Order Total: </label>
                <AmountPipe
                  order={item.order_total}
                  currency={currency}
                  edit={edit}
                />
              </div> */}
            </div>
          )
        })
        :
        <div>Loading</div>
      }
    </div>

  )
}
