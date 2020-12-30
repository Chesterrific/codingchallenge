import React from 'react'

export default function AmountPipe({ order, currency, edit }) {

  var decodeSymbol = function (str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  };

  if (edit) {
    return (
      <div className='orderTotal'>
        <span>{
          currency.map((item) => {
            if (item.currency === order.currency) {
              return (decodeSymbol(item.symbol))
            }
          })}
        </span>
        <input type="number" value={
          parseFloat(order.amount).toFixed(2)
        }
        />
      </div>
    )
  } else {
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
}
