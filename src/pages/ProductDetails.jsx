import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetails } from "../queryFunctions/queryFunctions";
import { Button, Paper, Typography } from "@mui/material";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const { data: productDetails } = useQuery({
    queryKey: ["productDetails"],
    queryFn: () => fetchProductDetails(id),
  });

  // console.log(productDetails);

  return (
    <div className="flex flex-col items-center capitalize p-10">
      <Typography className="!mb-3" variant="body1">
        <b>Category: </b>
        {productDetails?.category}
      </Typography>
      <Paper elevation={5} className="flex justify-between">
        <Link to="/">
          <Button className="h-full" variant="outlined">
            Go back to Home
          </Button>
        </Link>
        <img src={productDetails?.images[0]} className="w-[500px]" alt="" />
        <div className="flex flex-col p-5 gap-2">
          <Typography variant="h4">
            <b>Title: </b>
            {productDetails?.title}
          </Typography>
          <Typography>
            <b>Availability: </b>
            {productDetails?.availabilityStatus}
          </Typography>
          <Typography>
            <b>Ratings: </b>
            {productDetails?.rating}
          </Typography>
          <Typography>
            <b>Price: </b>${productDetails?.price}
          </Typography>
          <Typography>
            <b>Description: </b>
            {productDetails?.description}
          </Typography>
          <Typography>
            <b>Discount: </b>
            {productDetails?.discountPercentage}%
          </Typography>
          <Typography>
            <b>Minimum Orders: </b>
            {productDetails?.minimumOrderQuantity}
          </Typography>
          <Typography>
            <em>{productDetails?.returnPolicy}</em>
          </Typography>
          <Typography>
            <b>{productDetails?.warrantyInformation}</b>
          </Typography>
          <Button
            onClick={() => {
              Swal.fire({
                title: "Success",
                text: "Added to the Cart",
                icon: "success",
              });
            }}
            variant="contained"
            color="success"
          >
            Buy now
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ProductDetails;
