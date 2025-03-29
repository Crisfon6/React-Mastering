import { useEffect, useState } from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const onMouseMove = (event: MouseEvent) => {
        const {x, y} = event;
        setCoords({x, y});
    }
    useEffect(() => {
        console.log('Message component mounted');
      
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            console.log('Message component unmounted');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);
    return (
        <div>
            <h1>Message</h1>
            <pre>{JSON.stringify(coords)}</pre>
        </div>
    )
}
