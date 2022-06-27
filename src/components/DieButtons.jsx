import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export function ButtonsRow({ updateCalc, clearState, setEndResult }) {
  const styledNumbers = {
    borderRadius: 10,
    backgroundColor: '#99C4C8',
    fontSize: '18px',
    color: '#45526c',
  };

  const styledOperators = {
    width: '30px',
    borderRadius: 10,
    backgroundColor: '#68A7AD',
    fontSize: '18px',
    color: '#45526c',
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderRadius: '25px',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('1')}
        >
          1
        </Button>

        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('2')}
        >
          2
        </Button>
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('3')}
        >
          3
        </Button>
        <Button
          style={styledOperators}
          size="large"
          variant="contained"
          onClick={() => clearState()}
        >
          c
        </Button>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('4')}
        >
          4
        </Button>
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('5')}
        >
          5
        </Button>
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('6')}
        >
          6
        </Button>
        <Button
          style={styledOperators}
          size="large"
          variant="contained"
          onClick={() => updateCalc('+')}
        >
          +
        </Button>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('7')}
        >
          7
        </Button>
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('8')}
        >
          8
        </Button>
        <Button
          style={styledNumbers}
          size="large"
          variant="contained"
          onClick={() => updateCalc('9')}
        >
          9
        </Button>
        <Button
          style={styledOperators}
          size="large"
          variant="contained"
          onClick={() => updateCalc('-')}
        >
          -
        </Button>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          style={styledNumbers}
          variant="contained"
          onClick={() => updateCalc('0')}
        >
          0
        </Button>

        <Button
          style={styledOperators}
          variant="contained"
          onClick={() => updateCalc('/')}
        >
          /
        </Button>
        <Button
          style={styledOperators}
          variant="contained"
          onClick={() => updateCalc('*')}
        >
          *
        </Button>
        <Button
          style={styledOperators}
          variant="contained"
          onClick={() => setEndResult()}
        >
          =
        </Button>
      </Grid>
    </Box>
  );
}
