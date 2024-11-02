import React, { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  // import the products from the Context URL -- uske bad products me se unique category nikalni hai uske liye agar products humare pass aagye hai to Reduce method se category nikalenge --
  const { products } = useContext(ProductContext);
  // reduce 2 value deta hai , acc, or cv isme hum first pe array pass krenge or dusre me CV ki category aajaye, ye hume unique category wala arry daega bs

  let UniqueCategory =
    products &&
    products.reduce(
      (accumulator, currentValue) => [...accumulator, currentValue.category],
      []
    );
  // here i used the set that only return the unique value collection- ( it is a pre build constructor) -
  UniqueCategory = [...new Set(UniqueCategory)];
  console.log(UniqueCategory);

  // yaha pe categories ko unique color dene k liye kia h code [Personal Choice]----------------------------------------------------------------
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed(0)}, ${(
      Math.random() * 255
    ).toFixed(0)}, ${(Math.random() * 255).toFixed(0)}, 0.9)`;
  };


  return (
    <>
      {/* Here i created the Navigation bar-- */}

      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 dark:bg-[#0D1B1E] dark:text-white ">
        <a
          className="py-2 px-5 border rounded border-blue-200 text-blue-700 shadow-md dark:text-white dark:bg-blue-600 dark:shadow-slate-600	"
          href="/create">
          Add New Product
        </a>
        <hr className="w-[80%] my-3 border border-black" />
        <h1 className="text-2xl mb-3  w-[80%]">Category Filter</h1>
        <div className=" w-[80%]">
          {/* here i added the uniqye category from aboue to show the unique category from the array of category - */}

          {UniqueCategory.map((category, index) => (
            <Link
              key={index}
              to={`/?category=${category}`}
              className="mb-3 flex items-center">
              <span style={{backgroundColor: color()}} className=" w-[15px] h-[15px] border border-black shadow-md mr-2 rounded-full"></span>
              {category}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
