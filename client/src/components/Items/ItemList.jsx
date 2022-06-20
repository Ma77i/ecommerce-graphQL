import React from "react";
import Item from "./Item";
import Grid from "@mui/material/Grid";

const ItemList = ({ items }) => {
  
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {items.map((item) => (
          <Grid item xs={4}>
            <Item key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ItemList;
