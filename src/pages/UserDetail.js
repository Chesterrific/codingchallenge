import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

// Components
import AmountPipe from '../components/AmountPipe.js';

export default function UserDetail({ data, setData, currency, loaded }) {

  // States
  const [person, setPerson] = useState([]);
  const [localFName, setFName] = useState('');
  const [localLName, setLName] = useState('');
  const [localStr, setStr] = useState('');
  const [localApt, setApt] = useState('');
  const [localCity, setCity] = useState('');
  const [localState, setState] = useState('');
  const [localZip, setZip] = useState('');
  const [localGender, setGender] = useState('');
  const [localAge, setAge] = useState('');
  const [localTotal, setTotal] = useState('');

  // Grab parameters from url
  const { fname, lname, age } = useParams();

  let history = useHistory();

  useEffect(() => {
    setPerson(data.filter(item => item.first_name.toLowerCase().includes(fname.toLowerCase())
      && item.last_name.toLowerCase().includes(lname.toLowerCase())
      && parseFloat(item.age) === parseFloat(age)));

  }, [data]);

  useEffect(() => {
    setFName(person.map((item) => { return item.first_name }));
    setLName(person.map((item) => { return item.last_name }));
    setStr(person.map((item) => { return item.address.address1 }));
    setApt(person.map((item) => { return item.address.address2 }));
    setCity(person.map((item) => { return item.address.city }));
    setState(person.map((item) => { return item.address.state }));
    setZip(person.map((item) => { return item.address.zip }));
    setGender(person.map((item) => { return item.gender }));
    setAge(person.map((item) => { return item.age }));
    setTotal(person.map((item) => { return item.order_total.amount }));
  }, [person])

  // Set various states to input values.
  const fNameHandler = (e) => {
    setFName(e.target.value);
  }

  const lNameHandler = (e) => {
    setLName(e.target.value);
  }

  const strHandler = (e) => {
    setStr(e.target.value);
  }

  const aptHandler = (e) => {
    setApt(e.target.value);
  }

  const cityHandler = (e) => {
    setCity(e.target.value);
  }

  const stateHandler = (e) => {
    setState(e.target.value);
  }

  const zipHandler = (e) => {
    setZip(e.target.value);
  }

  const genderHandler = (e) => {
    setGender(e.target.value);
  }

  const ageHandler = (e) => {
    setAge(e.target.value);
  }

  const totalHandler = (e) => {
    setTotal(e.target.value);
  }

  const submitHandler = (id) => {
    console.log('submit');

    // Find and update current person through ID.
    const newDetails = data.map((item) => {
      if (item.id === id.toString()) {
        const updatedItem = {
          ...item,
          first_name: localFName.toString(),
          last_name: localLName.toString(),
          address: {
            ...item.address,
            address1: localStr.toString(),
            address2: localApt.toString(),
            city: localCity.toString(),
            state: localState.toString(),
            zip: localZip.toString(),
          },
          gender: localGender.toString(),
          age: parseInt(localAge.toString()),
          id: localFName.toString() + localLName.toString() + parseInt(localAge.toString()) + Math.random() * 1000,
          order_total: {
            ...item.order_total,
            amount: parseFloat(localTotal.toString()),
          },
        };
        return updatedItem;
      }
      return item;
    });

    setData(newDetails);
    alert('User: ' + id + ' has been updated.');

    // Route back to main page.
    history.push('/');
  }

  const deleteHandler = (id) => {
    // variable d to confirm user deletion.
    let d = window.confirm("Delete User?");

    if (d) {
      // Filter out item with matching id.
      const newList = data.filter(item => item.id !== id.toString());

      setData(newList);
      alert('User: ' + person.map((item) => { return item.id; }) + ' has been deleted.');
    }

    // Route back to main page.
    history.push('/');
  }

  return (
    <div className='userDetailWrapper'>
      <h1>User Details</h1>
      <div className='options'>
        <button onClick={() => submitHandler(person.map((item) => {
          return item.id;
        }))}>Submit Changes</button>
        <button onClick={() => deleteHandler(person.map((item) => {
          return item.id;
        }))}>Delete User</button>
      </div>
      {loaded ?
        person.map((item) => {
          return (
            <div className='userDetails' key={item.id}>
              <div className='userDetail' id='fname'>
                <label>First Name: </label>
                <input type="text" value={localFName} onChange={fNameHandler} />
              </div>
              <div className='userDetail' id='lname'>
                <label>Last Name: </label>
                <input type="text" value={localLName} onChange={lNameHandler} />
              </div>
              <div className='userDetail' id='address1'>
                <label>Street Address: </label>
                <input type="text" value={localStr} onChange={strHandler} />
              </div>
              <div className='userDetail' id='apt'>
                <label>Apt: </label>
                <input type="text" value={localApt} onChange={aptHandler} />
              </div>
              <div className='userDetail' id='city'>
                <label>City: </label>
                <input type="text" value={localCity} onChange={cityHandler} />
              </div>
              <div className='userDetail' id='state'>
                <label>State: </label>
                <input type="text" value={localState} onChange={stateHandler} />
              </div>
              <div className='userDetail' id='zip'>
                <label>ZIP Code: </label>
                <input type="text" value={localZip} onChange={zipHandler} />
              </div>
              <div className='userDetail' id='gender'>
                <label>Gender: </label>
                <input type="text" value={localGender} onChange={genderHandler} />
              </div>
              <div className='userDetail' id='age'>
                <label>Age: </label>
                <input type="text" value={localAge} onChange={ageHandler} />
              </div>
              <div className='userDetail' id='orderTotal'>
                <label>Order Total: </label>
                <AmountPipe
                  order={item.order_total}
                  currency={currency}
                  edit={true}
                  localTotal={localTotal}
                  totalHandler={totalHandler}
                />
              </div>
            </div>
          )
        })
        :
        <div>Loading</div>
      }
    </div>
  )
}