import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const URL = "https://fakestoreapi.com/products";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const param = useParams();

  useEffect(() => {
    axios.get(`${URL}/${param.id}`)
      .then(({data}) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(item);

  return (
    <>
        <ItemDetail key={item.id} item={item} />
    </>
  );
};

export default ItemDetailContainer;
