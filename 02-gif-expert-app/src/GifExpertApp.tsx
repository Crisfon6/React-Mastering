import { AddCategory, GridCategory } from "./components";
import { useState } from "react";

export function GifExpertApp() {
  const [categories, setCategories] = useState(["one punch"]);
  const addCategory = (newCategory: string) => {
    newCategory = newCategory.toLowerCase();
    if (categories.includes(newCategory)) return;
    setCategories((cat: string[]) => [newCategory, ...cat]);
  };
  return (
    <>
      <div className="bg-[url('/bg.gif')] bg-contain bg-center ">
        <h1 className="pt-5 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-rose-50 tracking-wide [text-shadow:_-1px_-1px_0_#a855f7,_1px_-1px_0_#a855f7,_-1px_1px_0_#a855f7,_1px_1px_0_#a855f7] py-1 px-1 transform hover:scale-105 transition-transform duration-300">
          GiftSearch
        </h1>
        <div className="flex justify-center container mx-auto px-10">
          <AddCategory
            /* setCategories={setCategories} categories={categories} */
            onNewCategory={addCategory}
          />
        </div>
      </div>
      {categories.map((category) => (
        <GridCategory key={category} category={category} />
      ))}
      <div className="flex justify-center container mx-auto px-10"></div>
    </>
  );
}
