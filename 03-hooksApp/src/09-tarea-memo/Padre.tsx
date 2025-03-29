import { Hijo } from './Hijo'
import { useMemo, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num:number ) => {
        setValor(val=>val+num)
    }
    const memoHijos = useMemo(()=>{
        return numeros.map( n => (
            <Hijo 
                key={ n }
                numero={ n }
                incrementar={ incrementar }
            />
        ))
    },[])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="p-8 bg-white rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold mb-4">Padre</h1>
                <p className="text-xl mb-4">Total: {valor}</p>

                <hr className="my-6 border-gray-200" />

                <div className="flex flex-wrap gap-4 justify-center">
                    {memoHijos}
                </div>
            </div>
        </div>
    )
}
