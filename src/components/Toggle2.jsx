import React from 'react';
import { data }  from "../items";

const Toggle2 = () => {
    // const [data, setData] = useState();
    

  
    
  return (
      <div>
          {data.map((el, i) => {
              return (
                <div key={el.id}>
                  <p>{el.name}</p>
                  <p>{el.slot}</p>
                  <p>{el.defence}</p>
                  <p>{el.damage}</p>
                      <p>{el.isworn.toString()}</p>
                      {/* <button onClick={handleClick}>Toggle</button> */}
                </div>
              );
          })}
        
    </div>
  )
}

export default Toggle2