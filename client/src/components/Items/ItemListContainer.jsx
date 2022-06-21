import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";

// const URL = "http://localhost:8080/graphql";
const API_URL = "http://localhost:8080/api/products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}`)
      .then(({data}) => {
          setItems(data);
        }
      )
  }, []);
  
  // useEffect(() => {
  //   axios
  //     .post(
  //       URL,
  //       {
  //         query: `
  //           query {
  //             getAllProducts {
  //               id,
  //               title,
  //               price,
  //               thumbnail
  //             }
  //           }
  //         `
  //       },
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //     .then(({ data }) => {
  //       const products = data.data.getAllProducts;
  //       setItems(products);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <h1> ECODERCE</h1>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
