import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Login} from "./Pages";
import AddProduct from "./Pages/AddProduct";
import Magazine from "./Pages/Magazine";
import ForBiznes from "./Pages/ForBiznes";
import Productss from "./Pages/Productss";
import { Itemss } from "./Components/Itemss";
function App() {
  const token = JSON.parse(window.localStorage.getItem("token")) || null;
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/Login");
    } else {
      navigate("/");
    }
  }, [token]);
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((json) => setProduct(json.data));
  }, []);
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home product={product} />} />
        <Route path="/Magazine" element={<Magazine />} />
        <Route path="/products" element={<Productss product={product} />} />
        <Route
          path="/product/:productId"
          element={<Itemss product={product} />}
        />
        <Route path="/ForBiznes" element={<ForBiznes />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
