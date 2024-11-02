import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

const Details = () => {
  // yahan pe context se products ko fetch krke product id k according product show krenge or fir is ko useEffect me call kr lenge -

  //yaha useState ka use krke isko save kr lenge jisse ek single product ki jagah mil jaye, jisse wo data axios me jaake setproduct me laa sake--
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      setproduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // isko call krne k liye data ki id nikalni pdegi jiske liye hum useParams ka b use krenge jiska kaam hota h wo id nikalna
  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <>
      <div className="w-[80%] h-full flex items-center justify-between  m-auto p-[10%]">
        <img
          className="object-contain h-[80%] w-[40%]"
          src={`${product.image}`}
          alt={product.title}
        />
        <div className="content w-[50%]">
          <h1 className="text-4xl">{product.title}</h1>
          <h3 className="text-zinc-400 my-5 text-sm">{product.category}</h3>
          <h2 className="text-red-500 mb-3 font-bold text-2xl">
            $ {product.price}
          </h2>
          <p className="mb-[15%]">{product.description}</p>

          <Link
            to={`/edit/${id}`}
            className="py-3 px-8 mr-5 border rounded border-blue-200 text-blue-700 shadow-md dark:text-white dark:bg-blue-600 dark:shadow-slate-600	">
            Edit
          </Link>
          <Link
            to={`/delete/${id}`}
            className="py-3 px-8 border rounded border-red-200 text-red-500 shadow-md  dark:text-white dark:bg-red-600 dark:shadow-slate-600	">
            Delete
          </Link>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Details;
