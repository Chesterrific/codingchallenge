import React from 'react'

export default function AmountPipe({ order, currency }) {

  var decodeSymbol = function (str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  };

  return (
    <div className='orderTotal'>
      {currency.map((item) => {
        if (item.currency === order.currency) {
          return (decodeSymbol(item.symbol) + parseFloat(order.amount).toFixed(2));
        }
      })}
    </div>
  )
}
