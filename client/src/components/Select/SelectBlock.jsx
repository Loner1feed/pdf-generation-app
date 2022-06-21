// import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from "react-select";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormat } from "../../redux/slices/editorSlice";

const options = [
  { value: "A3", label: "A3" },
  { value: "A4", label: "A4" },
  { value: "A5", label: "A5" },
];

export const SelectBlock = () => {
  const dispatch = useDispatch();
  const { format } = useSelector((state) => state.editor);

  const [option, setOption] = useState({ label: format, value: format });

  const handleChange = (e) => {
    dispatch(setFormat(e.value));
    setOption(e);
  };

  return (
    <>
      <h2>Please select format of your document:</h2>
      <Select
        onChange={handleChange}
        value={option}
        options={options}
        isSearchable={false}
      />
    </>
  );
};
