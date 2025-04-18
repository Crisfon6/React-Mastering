import { useLayoutEffect, useRef } from "react";
import { useCounter, useFetch } from "../hooks";
import { Pokemon } from "../interfaces/PokeApi.interface";

export const LayoutPage = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading, hasError, error } = useFetch<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${counter}?limit=5`
  );
  const name = useRef<HTMLDivElement>(null);
  useLayoutEffect(()=>{
    console.log(name.current?.getBoundingClientRect());
    const {height,width} = name.current?.getBoundingClientRect() || {height:0,width:0};
    console.log({height,width});
  },[data])
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-3xl font-bold mb-4">Pokemon Explorer (useLayoutEffect)</h1>
      
      <div className="min-h-[32rem]"> {/* Contenedor con altura mínima fija */}
        {loading ? (
          <div className="flex justify-center items-center h-[32rem]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : hasError ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        ) : data && (
          <>
            <div className="flex gap-4 mb-4">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 cursor-pointer"
                onClick={() => counter > 1 && increment(-1)}
                disabled={counter <= 1}
              >
                Previous
              </button>
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                onClick={() => increment()}
              >
                Next Pokemon
              </button>
              <span className="py-2 px-4 bg-gray-100 rounded">#{counter}</span>
            </div>

            <div className="w-100 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mb-4">
              <div className="relative">
                <img 
                  className="w-full h-64 object-contain bg-gray-100 p-4 transition-transform duration-300 hover:scale-110"
                  src={data.sprites.other?.dream_world.front_default} 
                  alt={data.name}
                  loading="lazy"
                />
              </div>
              <div className="px-6 py-4">
                {/* Pokemon Name */}
                <div ref={name} className="font-bold text-2xl mb-4 capitalize text-center text-gray-800">{data.name}</div>
                
                {/* Pokemon Stats */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Base Stats:</div>
                  {data.stats.map(stat => (
                    <div key={stat.stat.name} className="mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm capitalize text-gray-600">{stat.stat.name}</span>
                        <span className="text-sm font-medium text-gray-700">{stat.base_stat}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out" 
                          style={{
                            width: `${(stat.base_stat / 255) * 100}%`,
                            backgroundColor: stat.base_stat > 150 ? '#10B981' : stat.base_stat > 100 ? '#3B82F6' : '#F59E0B'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pokemon Types */}
                <div className="flex gap-2 justify-center">
                  {data.types.map(type => (
                    <span 
                      key={type.type.name}
                      className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 capitalize hover:bg-gray-300 transition-all duration-200 cursor-pointer transform hover:scale-105"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
