import { useState } from "react";

/* export function AddCategory({setCategories, categories}: {setCategories: (value: string[] | ((prevState: string[]) => string[])) => void, categories: string[]}) {
    const [input,setInput] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputValue:string = form.search.value;
        if(categories.includes(inputValue.trim()) || inputValue.trim() === '') return;
        setCategories((cat:string[])=>([inputValue.trim(),...cat]));
        form.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search gifs" id="search" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit">Add</button>            
        </form>
    )
} */
export function AddCategory({onNewCategory}: {onNewCategory: (newCategory:string)=>void}) {
    const [input,setInput] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const cleanInput = input.trim();
        if(cleanInput.length <= 1) return;
        onNewCategory(cleanInput);
        setInput('');
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6 w-full max-w-2xl" aria-label="form">
            <input 
                type="text" 
                placeholder="Search gifs" 
                id="search" 
                value={input} 
                onChange={(e)=>setInput(e.target.value)}
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
            />
            <button 
                type="submit"
                className="block sm:hidden bg-purple-300 hover:bg-purple-400 text-white font-medium px-6 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
                Add
            </button>            
        </form>
    )
}
