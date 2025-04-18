import React from 'react';

export const ShowIncrement = React.memo(({increment}:{increment:(val:number)=>void}) => {
    console.log('ShowIncrement rendered')
    return (
        <button onClick={()=>increment(5)}>Increment</button>
    )
});

