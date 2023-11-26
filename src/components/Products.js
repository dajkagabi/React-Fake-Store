import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { CircleLoader } from "react-spinners"; 
const Products = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
       
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products-container">
      {/* Betöltő animáció csak akkor jelenik meg, ha loading true */}
      {loading && (
        <div className="loading-container">
          <CircleLoader size={90} color="#36D7B7" loading={loading} strokeWidth={12}/>
        </div>
      )}

   
      {!loading &&
        data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description">
              <h5>{product.title}</h5>
              <h5>{`Price : ${product.price}`}</h5>
              <h5>{`Category: ${product.category}`}</h5>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
