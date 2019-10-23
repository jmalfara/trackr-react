import React from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function PageTwo({ systemState, dataState, readonly }) {

  const onSubmit = e => {
      e.preventDefault();
      //TODO Validate Address.

      // Navigate to the next page.
      systemState.update("currentPage", systemState.currentPage + 1)
  }

  return (
    <div>

      <h3>Vehicle Information</h3>
      <p>Please provide us with some information about your vehicle.</p>

      <form onSubmit={onSubmit} className="Container">

          <TextField
            required
            label="Vehicle Manufacturer"
            className="InputWidth"
            value={dataState.manufacturer || ""}
            onChange={dataState.handleChangeValue('manufacturer')}
            margin="normal"
            variant="outlined"
            disabled={readonly}
          />

          <TextField
            required
            label="Vehicle Model"
            className="InputWidth"
            value={dataState.model || ""}
            onChange={dataState.handleChangeValue('model')}
            margin="normal"
            variant="outlined"
            disabled={readonly}
          />

          <TextField
            required
            label="Year"
            className="InputWidth"
            value={dataState.year || ""}
            onChange={dataState.handleChangeValue('year')}
            margin="normal"
            variant="outlined"
            disabled={readonly}
          />

          <TextField
            required
            label="Color"
            className="InputWidth"
            value={dataState.color || ""}
            onChange={dataState.handleChangeValue('color')}
            margin="normal"
            variant="outlined"
            disabled={readonly}
          />

          {
            readonly ? null :
            <Button variant="contained" color="primary" type="submit">
              Next
            </Button>
          }
      </form>

    </div>
  );
}

export default PageTwo;
