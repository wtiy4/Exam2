import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

function ProductPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-8">
        The product details
      </h1>
      <div className="mt-20 flex w-full justify-center items-center h-screen text-center">
        <div className="flex flex-col items-center shadow-xl w-[300px] rounded-xl h-[500px] bg-white gap-5">
          <div className="font-extrabold">{data.title}</div>
          <img src={data.image} width={120} alt={data.title} />
          <span>{data.price}$</span>
          <p>{data.description}</p>
          <Link to={"/products"}>
            <div className="hover:text-blue-600 cursor-pointer">
              More products
            </div>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div className="text-center bg-gray-800 rounded h-[40px] w-[120px] cursor-pointer text-white flex items-center justify-center">
              {data.category}
            </div>
            <MdAddShoppingCart className="text-3xl cursor-pointer active:text-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
