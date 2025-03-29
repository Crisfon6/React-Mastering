import React from 'react'

export const Hijo = ({ numero, incrementar }: { numero: number, incrementar: (numero: number) => void }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 active:scale-95 mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
}
