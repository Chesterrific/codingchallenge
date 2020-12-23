import React from 'react';

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
      {loaded ?
        <div>
          {
            filteredList.map((item) => {
              return (
                <div className='dataEntry' key={item.first_name + item.last_name + item.age}>
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
          }
        </div> :
        <div>Loading</div>
      }
    </div>
  )
}
