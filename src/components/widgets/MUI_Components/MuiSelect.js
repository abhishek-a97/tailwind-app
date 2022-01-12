import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MuiSelect =(props) => {

  const handleChange = (event) => {
    props.setFunction(event.target.value);
  };

  return (
    // <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth 
      name={props.name}
      >
        <InputLabel id="department">Department</InputLabel>
        <Select
            name={props.name}
          labelId="demo-simple-select-label"
          id="department"
          value={props.value}
          label='Department'
          onChange={handleChange}
        >
            {props.children}
          {/* <MenuItem value={'Information Technology'}>IT</MenuItem>
          <MenuItem value={'Human Resource'}>HR</MenuItem>
          <MenuItem value={'Account'}>Accounts</MenuItem> */}
        </Select>
      </FormControl>
    // </Box>
  );
}
export default MuiSelect;
