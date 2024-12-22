import React, { useContext, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
const Create = () => {
  // yha products context chahiye coz API se temp data aa raaha h jisme hum apne product add nahi kr sakte hai--

  const { products, setproducts } = useContext(ProductContext);

  // yahann pe hum form create kar rahe hai webpage pe new product add krne ke liye ---
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  // yaha form submit logic kr rahe hai -
  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill all the fields");
      return;
    }

    const product = {
      id: nanoid(),
      //   Date.now(),  Add a unique id for the new product
      title,
      image,
      category,
      price:
        //   Number(price), // Convert price to number
        description,
    };
    setproducts([...products, product]);
    console.log(product);

    // Clear form fields after submission
    // settitle("");
    // setimage("");
    // setcategory("");
    // setprice("");
    // setdescription("");
  };

  return (
    <>
      <form
        onSubmit={AddProductHandler}
        className="w-screen min-h-screen p-[5%] flex flex-col items-center bg-gray-200">
        <h1 className="text-3xl font-semibold mb-5">Add New Product</h1>
        <input
          type="url"
          placeholder="Image url"
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 shadow-lg"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />
        <input
          type="text"
          placeholder="Product Title"
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 shadow-lg"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Product Category"
            className="text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3 shadow-lg"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="Product Price"
            className="text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3 shadow-lg"
            onChange={(e) => setprice(e.target.value)}
            value={price}
            min="0"
          />
        </div>
        {/* yaha pe textarea for the product description */}
        <textarea
          placeholder="Enter product description here..."
          className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 shadow-lg"
          rows="10"
          onChange={(e) => setdescription(e.target.value)}
          value={description}></textarea>

        <div className="w-1/2">
          <button
            type="submit"
            className="py-2 px-5 border rounded border-blue-200 text-blue-700 shadow-md dark:text-white dark:bg-blue-600 dark:shadow-slate-600">
            Add New Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
