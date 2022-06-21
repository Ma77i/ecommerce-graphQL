import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

// const URL = "http://localhost:8080/graphql";
const API_URL = "http://localhost:8080/api/products";

const ItemDetailContainer = () => {
  console.log("ItemDetailContainer");
  const [item, setItem] = useState({});
  const param = useParams();

  // useEffect(() => {
  //   axios
  //     .post(
  //       URL, {
  //         query: `
  //           query {
  //             getProduct(id: ${param.id}) {
  //               id,
  //               title,
  //               price,
  //               description,
  //               thumbnail
  //             }
  //           }
  //         `,
  //       }, {
  //         headers: { "Content-Type": "application/json" }})
  //     .then(({ data }) => {
  //       const product = data.data.data.getProduct;
  //       console.log(product);
  //       setItem(product);
  //     })
  // }, [param.id]);

  
  useEffect(() => {
      axios.get(`${API_URL}/${param.id}`)
        .then(({data}) => {
            setItem(data);
          })
          .catch((error) => {
              console.log(error);
            });
        }, [param.id]);
        
  console.log(item);
  console.log(param.id);

  return (
    <>
      <ItemDetail key={item.id} item={item} />
    </>
  );
};

export default ItemDetailContainer;
