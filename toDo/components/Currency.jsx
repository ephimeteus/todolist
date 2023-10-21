import React, { useState, useEffect } from 'react';


const API_URL ='https://cotizaciones-brou-v2-e449.fly.dev/currency/latest';

const Currency = () => {
  
  const [data,SetData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
 
  if (data) {
    return (
      <div className="currency">
        <ul>
            <li key={'USD'} className='currency-rates'> 
                <strong>USD</strong>
                <p>{`${data.rates.USD.buy}`} | {`${data.rates.USD.sell}`}</p>
            </li>
            <li key={'ARS'} className='currency-rates'> 
                <strong>ARS</strong>
                <p>{`${data.rates.ARS.buy}`} | {`${data.rates.ARS.sell}`}</p>
            </li>
            <li key={'BRL'} className='currency-rates'> 
                <strong>BRL</strong>
                <p>{`${data.rates.BRL.buy}`} | {`${data.rates.BRL.sell}`}</p>
            </li>
            <li key={'EUR'} className='currency-rates'> 
                <strong>EUR</strong>
                <p>{`${data.rates.EUR.buy.toFixed(1)}`} | {`${data.rates.EUR.sell.toFixed(1)}`}</p>
            </li>
           
            
        </ul>
      </div>
    );
  } else {
    return <p>Loading Currencies...</p>;
  }
};

export default Currency ;


