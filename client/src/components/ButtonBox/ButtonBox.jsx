import { Box, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import { style } from "./style/style";

export const ButtonBox = ({ previewFunction, generateFunction }) => {
  return (
    <Box sx={style.wrapper}>
      <Button variant="outlined" size="large" onClick={previewFunction}>
        Preview
      </Button>
      <LoadingButton
        variant="contained"
        size="large"
        onClick={generateFunction}
      >
        Generate PDF
      </LoadingButton>
    </Box>
  );
};
