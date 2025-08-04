import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routing from "./routing/Routing";
import Header from "./layout/Header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchCatList,
  fetchCatProducts,
  fetchSearchProducts,
} from "./queryFunctions/queryFunctions";
import { NavLink } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const { data: catList } = useQuery({
    queryKey: ["catList"],
    queryFn: fetchCatList,
  });
  // console.log(catList);

  const queryClient = useQueryClient();

  const updateCatProducts = useMutation({
    mutationFn: fetchCatProducts,
    onSuccess: queryClient.invalidateQueries(["catProducts"]),
  });

  const updateSearchProducts = useMutation({
    mutationFn: fetchSearchProducts,
    onSuccess: queryClient.invalidateQueries(["searchProducts"]),
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <div className="grid grid-flow-col grid-cols-5">
        <div className="col-span-1">
          <ul className="p-5 flex flex-col gap-2 capitalize">
            {catList?.map((cat, index) => (
              <NavLink key={index} to={`/products/category/${cat}`}>
                <li>{cat}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="col-span-4">
          <Routing
            updateCatProducts={updateCatProducts}
            updateSearchProducts={updateSearchProducts}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
