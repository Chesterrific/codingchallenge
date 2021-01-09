import React from 'react'

export default function AmountPipe({ order, currency, edit, localTotal, totalHandler }) {

  // Decodes html character code to display actual symbol.
  const decodeSymbol = (str) => {
    return str.replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    });
  };

  // Return an input field if 'edit' is true.
  if (edit) {
    return (
      <div className='orderTotal'>
        <span>
          {    // Map through currency_symbols.json to match character code and display appropriate currency symbol.
            currency.map((item) => {
              if (item.currency === order.currency) {
                return (decodeSymbol(item.symbol))
              }
              return '';
            })
          }
        </span>
        <input type="text" value={localTotal} onChange={totalHandler} />
      </div>
    )
  } else {
    return (
      <div className='orderTotal'>
        {  // Map through currency_symbols.json to match character code and display appropriate currency symbol.
          currency.map((item) => {
            if (item.currency === order.currency) {
              // Parse order.amount to two decimal places.
              return (decodeSymbol(item.symbol) + parseFloat(order.amount).toFixed(2));
            }
          })
        }
      </div>
    )
  }
}
