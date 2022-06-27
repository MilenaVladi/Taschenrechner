import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const OutputScreen = ({ value, result }) => {
  return (
    <Box
      sx={{
        width: 255,

        backgroundColor: '#EFFFFD',
        //   padding: '18px 36px',
        fontSize: '18px',
        color: 'white',
      }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        value={value}
        result={result}
      ></TextField>
    </Box>
  );
};
