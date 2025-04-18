
import { RickMortyResponse } from '../interfaces/RickMortyApi.interface'
import { useFetchRickAndMorty } from '../hooks/useTanStack'
import { useCounter } from '../hooks/useCounter'
export const TanQuery = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, haveError, error } = useFetchRickAndMorty<RickMortyResponse>({ url: `https://rickandmortyapi.com/api/character/${counter}` });
    return (
        <div className="flex flex-col items-center justify-center mt-4 bg-[#1F2937] min-h-screen text-[#A7F432]">
        <h1 className="text-4xl font-extrabold mb-4 text-[#A7F432] animate-pulse">Rick and Morty Explorer</h1>
        
        <div className="min-h-[32rem]">
          {isLoading ? (
            <div className="flex justify-center items-center h-[32rem]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#A7F432]"></div>
            </div>
          ) : haveError ? (
            <div className="bg-red-900 border-2 border-red-400 text-red-200 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Wubba Lubba Dub Dub! Error!</strong>
              <span className="block sm:inline"> {error?.message}</span>
            </div>
          ) : data && (
            <>
              <div className="flex gap-4 mb-4">
                <button 
                  className="bg-[#40B5CB] hover:bg-[#2D8094] text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#40B5CB] focus:ring-opacity-50 disabled:opacity-50 cursor-pointer shadow-lg shadow-[#40B5CB]/50"
                  onClick={() => counter > 1 && increment(-1)}
                  disabled={counter <= 1}
                >
                  Previous Character
                </button>
                <button 
                  className="bg-[#40B5CB] hover:bg-[#2D8094] text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#40B5CB] focus:ring-opacity-50 cursor-pointer shadow-lg shadow-[#40B5CB]/50"
                  onClick={() => increment()}
                >
                  Next Character
                </button>
                <span className="py-2 px-4 bg-[#2D8094] text-white rounded-lg font-mono">Character #{counter}</span>
              </div>
  
              <div className="w-100 rounded-2xl overflow-hidden shadow-2xl bg-[#2D3748] hover:shadow-[#A7F432] transition-all duration-300 mb-4 border-2 border-[#40B5CB]">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#A7F432] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <img 
                    className="w-full h-80 object-cover bg-[#1F2937] p-4 transition-transform duration-300 group-hover:scale-110"
                    src={data.image} 
                    alt={data.name}
                    loading="lazy"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-3xl mb-4 text-center text-[#A7F432] font-['Get Schwifty'] hover:text-[#40B5CB] transition-colors duration-300">
                    {data.name}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-[#40B5CB] text-white rounded-full">
                      Status: {data.status}
                    </span>
                    <span className="px-3 py-1 bg-[#40B5CB] text-white rounded-full">
                      Species: {data.species}
                    </span>
                    <span className="px-3 py-1 bg-[#40B5CB] text-white rounded-full">
                      Origin: {data.origin.name}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
}
