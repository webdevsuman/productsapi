import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCatProducts } from "../queryFunctions/queryFunctions";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";

const CategoryProducts = ({ updateCatProducts }) => {
  const { cat } = useParams();
  //   console.log(cat);

  const { data: catProducts, isLoading } = useQuery({
    queryKey: ["catProducts"],
    queryFn: () => fetchCatProducts(cat),
  });

  useEffect(() => {
    updateCatProducts.mutate(cat);
  }, [cat]);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );
  } else {
    return (
      <div className="flex flex-wrap gap-5 m-5 justify-between">
        {catProducts?.map((pro) => (
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
  }
};

export default CategoryProducts;
