import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../queryFunctions/queryFunctions";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: allProducts, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });
  // console.log(allProducts);

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
        {allProducts?.map((pro) => (
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

export default Home;
