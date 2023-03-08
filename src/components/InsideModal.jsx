import React, { useState } from 'react';
import Select from './Select';


function InsideModal() {

  /* ---------------------------------- state --------------------------------- */

  const [state, setState] = useState([{host: "", guest: "", whoWins: ""}]);

  const getBackResult = event => {
    const newState = state;
    newState[event.index] = event.result;
    setState([...newState]);
  }

  return (
    <>
      <p>
        حداقل سه عدد داده وارد کنید، سپس می توانید نتیجه خود را پیش بینی کنید
      </p>

      {
        state.map((item, index) => 
          <div key={index}>
            <Select getBackResult={(result) => getBackResult({result, index})} />   
          </div>
        )
      }
      
    </>
  )
}

export default InsideModal