import React, { useState } from 'react';
import { ButtonsRow } from './DieButtons';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { OutputScreen } from './InputText&result';

export function Calculator() {
  const [currentCalcString, setCurrentCalcString] = useState(''); // the whole string output
  const [result, setResult] = useState(''); // the made calculation

  const operators = ['/', '*', '+', '-', '.'];

  // Clear everything
  const clearState = () => {
    setCurrentCalcString('');
  };

  // Count end result
  const setEndResult = () => {
    setCurrentCalcString(result);
  };

  const updateCalc = numberOrOperator => {
    // If one of the operators appears
    if (
      (operators.includes(numberOrOperator) && currentCalcString === '') ||
      // Make sure that there is one operator
      (operators.includes(numberOrOperator) &&
        operators.includes(currentCalcString.slice(-1)))
    ) {
      return;
    }

    // String concatenation of numbers and signs
    setCurrentCalcString(currentCalcString + numberOrOperator);

    // Turn numbers into end result, only when the last digit is a number
    if (!operators.includes(numberOrOperator)) {
      // eslint-disable-next-line no-eval
      setResult(eval(currentCalcString + numberOrOperator)); // hier war noch toString()-methode. //ansosnsten macht er '8' + '8' = 88.
    }
  };

  return (
    <>
      <h3>Calculator</h3>
      <Paper
        elevation={9}
        sx={{
          p: 3,

          width: 300,
          height: 240,
          backgroundColor: 'white',
          borderRadius: '25px',
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <OutputScreen value={currentCalcString} />

          <ButtonsRow
            updateCalc={updateCalc}
            clearState={clearState}
            setEndResult={setEndResult}
          />
        </Grid>
      </Paper>
    </>
  );
}
