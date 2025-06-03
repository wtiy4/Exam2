import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { MdAddShoppingCart } from "react-icons/md";

function MainPage() {
  const url = "https://fakestoreapi.com/products/";

  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setInfo(res.data));
  }, []);
  console.log(info);

  return (
    <>
      <div className=" mt-20 flex w-full justify-center items-center flex-wrap h-screen gap-7 text-center">
        {info.map((item) => (
          <div
            key={item.id}
            className="flex  flex-col items-center shadow-xl w-[300px] rounded-xl h-[500px] bg-white gap-5"
          >
            <div className="font-extrabold">{item.title}</div>
            <img src={item.image} width={120} alt={`${item.title}`} />
            <span>{item.price}$</span>
            {/* <p className="">{item.description}</p> */}
            <br /> <br />
            <Link to={`/products/${item.id}`}>
              <div className="hover:text-blue-600 cursor-pointer">
                More details
              </div>
            </Link>
            <div className="flex items-center justify-center">
              <div className="text-center bg-gray-800 rounded h-[40px] w-[120px] cursor-pointer text-white ">
                {item.category}
              </div>
              <MdAddShoppingCart className="text-3xl cursor-pointer active:text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;
