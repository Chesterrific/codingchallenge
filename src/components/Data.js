import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AmountPipe from '../components/AmountPipe.js';
import AddressPipe from '../components/AddressPipe.js';

export default function Data({ loaded, filteredList, currency }) {

  return (
    <div className='data'>
      <div className='dataEntry' id='dataHeader'>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Address</div>
        <div>Gender</div>
        <div>Age</div>
        <div>Order Amount</div>
      </div>
      {/* If loaded is true, map through each item in the filtered list and add a link to this page. */}
      {loaded ?
        <div className='dataWrapper'>
          {
            filteredList.map((item) => {
              return (
                <div key={item.first_name + item.last_name + item.age}>
                  <Link className='dataEntry link' to={`/userdetails/${item.first_name}/${item.last_name}/${item.age}`}>
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
                  </Link>
                </div>
              )
            })
          }
        </div> :
        <div>Loading</div>
      }
    </div>
  )
}
