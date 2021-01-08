import React from 'react'

export default function AmountPipe({ order, currency, edit, localTotal, totalHandler }) {

  var decodeSymbol = function (str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  };
  // Return an input field if 'edit' is true.
  if (edit) {
    return (
      <div className='orderTotal'>
        <span>{
          currency.map((item) => {
            if (item.currency === order.currency) {
              return (decodeSymbol(item.symbol))
            }
            return '';
          })}
        </span>
        <input type="text" value={localTotal} onChange={totalHandler} />
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
