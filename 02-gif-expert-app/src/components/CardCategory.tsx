export function CardCategory({url,title}:{url:string,title:string}){
    return(
        <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s] hover:scale-105 hover:shadow-lg">
        <div className="rounded-[10px] bg-white p-4 ">
        <div data-testid="gif-image" style={{ backgroundImage: `url(${url})` }} className="bg-cover bg-center h-48" ></div>
          <h1 className="text-2xl font-bold mb-6 text-center text-rose-50 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] py-1 px-1    transform hover:scale-105 transition-transform duration-300 ">
            {title}
          </h1>
        </div>
      </div>
    )
}
