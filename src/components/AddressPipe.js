import React from 'react'

export default function AddressPipe({ address }) {
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
