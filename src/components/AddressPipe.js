import React from 'react'

export default function AddressPipe({ address, edit }) {

  if (edit) {
    return (
      <input type="text" value={
        address.address1 + ' ' +
        address.address2 + ' ' +
        address.city + ', ' +
        address.state + ', ' +
        address.zip
      } />
    )
  } else {
    return (
      <div className='address'>
        <div className='streetAddress'>
          {address.address1 + ' ' + address.address2}
        </div>
        <div className='locationAddress'>
          {address.city + ', ' + address.state + ', ' + address.zip}
        </div>
      </div>
    )
  }
}
