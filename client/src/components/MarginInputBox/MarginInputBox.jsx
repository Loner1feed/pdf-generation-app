import { Box, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMargins } from "../../redux/slices/editorSlice";
import { style } from "./style/style";

export const MarginInputBox = () => {
  const dispatch = useDispatch();
  const { margins } = useSelector((state) => state.editor);

  const marginChangeHandler = (e) => {
    let marginObj = {
      type: e.target.id,
      value: e.target.value,
    };

    dispatch(setMargins(marginObj));
  };

  return (
    <Box>
      <Box component="h2">Hete you can set margins to your document</Box>

      <Box sx={style.grid}>
        <TextField
          type="number"
          value={margins.top}
          label="top"
          onChange={marginChangeHandler}
          inputProps={{
            id: "marginTop",
            min: "0",
            max: "10",
            step: "0.1",
          }}
        />

        <TextField
          type="number"
          value={margins.bottom}
          label="bottom"
          onChange={marginChangeHandler}
          inputProps={{
            id: "marginBottom",
            min: "0",
            max: "10",
            step: "0.1",
          }}
        />

        <TextField
          type="number"
          value={margins.right}
          label="right"
          onChange={marginChangeHandler}
          inputProps={{
            id: "marginRight",
            min: "0",
            max: "10",
            step: "0.1",
          }}
        />

        <TextField
          type="number"
          value={margins.left}
          label="left"
          onChange={marginChangeHandler}
          inputProps={{
            id: "marginLeft",
            min: "0",
            max: "10",
            step: "0.1",
          }}
        />
      </Box>
    </Box>
  );
};
