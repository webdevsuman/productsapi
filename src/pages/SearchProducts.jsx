import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSearchProducts } from "../queryFunctions/queryFunctions";
import { useQuery } from "@tanstack/react-query";
import { Button, Paper, Typography } from "@mui/material";

const SearchProducts = ({ updateSearchProducts }) => {
  const { keyword } = useParams();
  //   console.log(keyword);

  const { data: searchProducts = [] } = useQuery({
    queryKey: ["searchProducts"],
    queryFn: () => fetchSearchProducts(keyword),
  });

  useEffect(() => {
    updateSearchProducts.mutate(keyword);
  }, [keyword]);
  // console.log(searchProducts);

  return (
    <div className="flex flex-wrap gap-5 m-5 justify-between">
      {!searchProducts.length && <Typography>No Products Found</Typography>}
      {searchProducts?.map((pro) => (
        <Paper
          elevation={3}
          className="flex flex-col gap-2 items-center p-5"
          key={pro.id}
        >
          <img src={pro.images[0]} alt="" className="h-[200px]" />
          <Typography>{pro.title}</Typography>
          <Link to={`/products/${pro.id}`}>
            <Button variant="outlined">View</Button>
          </Link>
        </Paper>
      ))}
    </div>
  );
};

export default SearchProducts;
