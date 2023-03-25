import { Box, CircularProgress, Grid, Skeleton } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context/Context";
import logo from "../logo.svg";
import Loading from "../Notification/Loading";
import ItemCard from "./Card";
import CockTailSearchForm from "../Pages/CockTailSearchForm";
import DataCard from "../Pages/DataCard";
const Home = () => {
  const { cocktail, cocktailidCheck, loading } = useGlobalContext();

  // if (loading) {
  //   return (
  //     // <Box sx={{ display: "flex",justifyContent:'center' }}>
  //     //   <CircularProgress />
  //     // </Box>

  //   );
  // }

  return (
    <div>
      <CockTailSearchForm></CockTailSearchForm>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          gap={"15.25px"}
          p="20px"
          width="100%"
          m="0"
          columns={12.5}
        >
          {loading
            ? Array.from(Array(20).keys()).map((item) => (
                <Grid key={item} xs={3}>
                  <Skeleton
                    sx={{ height: 200, width: 320 }}
                    animation="wave"
                    variant="rectangular"
                  />
                </Grid>
              ))
            : cocktail?.drinks?.slice(0, 20).map((drink) => (
                <Grid key={drink.idDrink} xs={3}>
                  <ItemCard item={drink} />
                </Grid>
              ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
