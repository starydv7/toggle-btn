import React, { useState } from 'react';
const Toggle = () => {
    const [data, setData] = useState(false);
    function handleClick() {
        setData(data => !data);
    }
  return (
      <div>
          {data.toString()}
         
          <button onClick={handleClick}>Toggle button</button>
    </div>
  )
}

export default Toggle;