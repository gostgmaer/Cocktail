import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context/Context";

const CockTailSearchForm = () => {
  const { setkeyword } = useGlobalContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      gap={"15.25px"}
      p="20px"
      width="100%"
      justifyContent={"space-between"}
      m="0"
      columns={12.5}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        p="10px 0"
        gap={"15.25px"}
        width="100%"
      >
        {" "}
        <Typography gutterBottom variant="h5" component="div">
          Search Your Favorite Cocktail
        </Typography>
        <TextField
          onChange={(e)=>setkeyword(e.target.value)}
          label="Search Cocktails"
          id="outlined-size-small"
          size="small"
        />
      </Box>
    </Grid>
  </Box>
  );
};

export default CockTailSearchForm;
