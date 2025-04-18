import { memo } from "react";
export const Small = memo(({value}:{value:number}) => {
    console.log('ReDraw')
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
        <small>{value}</small>
      </div>
  );
});
