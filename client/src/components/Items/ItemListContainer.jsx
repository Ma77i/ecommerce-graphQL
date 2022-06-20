import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const URL = "https://localhost:8080/graphql";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        URL,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(({ data }) => {
        // const { getAllProducts } = data.data;
        // setItems(getAllProducts);
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1> ECODERCE</h1>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
