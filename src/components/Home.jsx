import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Utils/Context";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import axios from "../Utils/axiosInstance";

const Home = () => {
  // import the products from the Context URL --

  const { products } = useContext(ProductContext);
  const { search } = useLocation();
  // use location to get the search params from the url
  const category = decodeURIComponent(search.split("=")[1]);
  // split the search params from the url and get the category, if category is not found then category is null, or yaha pe hum string me convert krenge decodeURI ka use krke -
  // yaha add krenge ki jab undefined hua toh kya karana hai -- 

  // yaha pe products filter kar rahae hai, agar products aagye hai to unko products me store kr de--
  const [filteredProducts, setfilteredProducts] = useState(null);


  const getProductCategory = async () => {
    //  is function ko tab call krna hai, agar category undefined nahi hai, agar undefined hai toh call nahi krna  iske liye hum useeffect ka use krte hai , fir filter products me data pass kr denge --
    try {
      const { data } = await axios(`/products/category/${category}`);
      console.log(data)
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!filteredProducts || category == "undefined") setfilteredProducts(products);
    // yahan pe simple !filteredProducts ki vajah se data show nahi ho raha home me sb , isliye yaha || or use kia ki Dono conditions me Data Daalo --
    if (category != "undefined") getProductCategory();
  }, [category, products])
  // yaha kia hai ki jse hi program load ho usme category and prod change hone k karan merea poora page refresh ho jana chahiye, agar pehle se filter products ki value khali hai to usme products daal dijiye, or uspe products hai lekine category undefined hai toh getProductCategory function ko call kr dejiye -- 
  console.log(category);


  return products ? (
    <>
      {/* navigation added here */}
      <Nav />
      {/* here is the total home page in which i added the product card, poore card ko link bna denge jisse kahin b click krne pe new page open ho jaye-- */}

      <div className="w-[85%] h-full p-5 pt-[5%] dark:bg-gray-700 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {/* ab yaha pr sb products ko map krke card bna denge ya unko sbko render kr denge or fir isme dynamic data add kr denge jaise image , title etc `url(${product.item})` use krke */}
        {filteredProducts && filteredProducts.map((product) => (
          <Link
            key={product.id}
            // yahan pe product id pass krenge jisse diffrent product open hon details me, or string type me mai yaha bol raha hun ki product ki id jaana chahiye url
            to={`/details/${product.id}`}
            // i passed the index with the product id thats why i was facing the issue of loading screen on id - 0 whenever i was clicking on the card 1
            className="card p-3 mb-2 mr-2 border dark:bg-white shadow-lg rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
            <div
              className="mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-105"
              style={{
                backgroundImage: `url(${product.image})`,
              }}>
              {" "}
            </div>
            <h1>{product.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    // here i putted the if condition in whole page if products not found then show the loading screen--
    <Loading />
  );
};

export default Home;
