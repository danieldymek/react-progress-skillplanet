import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

let id = 0;
export default function BadgeGrid(props) {
  return (
    <Box sx={{flexGrow: 0}}>
      <Grid container spacing={1}>
        {props.items.map((callback) => {
          id++;
          return (
            <Grid key={`BadgeGrid-${id}`} item xs>
              {callback}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
