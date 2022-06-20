import { Box, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useRef } from "react";
import { style } from "./style/style";

export const ButtonBox = ({ previewFunction, generateFunction, loading }) => {
  const ref = useRef();

  const generateHandler = () => {
    generateFunction();
  };

  return (
    <Box sx={style.wrapper}>
      <Button
        variant="outlined"
        size="large"
        onClick={previewFunction}
        disabled={loading}
      >
        Preview
      </Button>
      <LoadingButton
        ref={ref}
        variant="contained"
        size="large"
        onClick={generateHandler}
        loading={loading}
      >
        Generate PDF
      </LoadingButton>
    </Box>
  );
};
