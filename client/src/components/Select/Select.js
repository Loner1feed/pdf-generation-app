import { FormControl, InputLabel, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormat } from '../../redux/slices/editorSlice';

export const Select = () => {

  // const { format } = useSelector(state => state.editor);
  const [select, setSelect] = useState('')
  // const dispatch = useDispatch()

  const handleChange = (event) => {
    // dispatch(setFormat(event.target.value));
    setSelect(event.target.value)
  };

  return (


    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={select}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>A3</MenuItem>
        <MenuItem value={20}>A4</MenuItem>
        <MenuItem value={30}>A5</MenuItem>
      </Select>
    </FormControl>
  )
}
