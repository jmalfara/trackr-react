import React from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function PageThree({ systemState, dataState, readonly }) {

  const onSubmit = e => {
      e.preventDefault();
      //TODO Validate Address.

      // Navigate to the next page.
      systemState.update("currentPage", systemState.currentPage + 1)
  }

  return (
    <div>

      <h3>One last step</h3>
      <p>
        Please provide a phone number we can use to contact you. We may contact you with updates on your service.
        If there are any additional details you would like to share, please feel free to let us know below
      .</p>

      <form onSubmit={onSubmit} className="Container">
          <TextField
            label="Phone"
            className="InputWidth"
            value={dataState.phone || ""}
            onChange={dataState.handleChangeValue('phone')}
            margin="normal"
            variant="outlined"
            multiline
            disabled={readonly}
            required
          />

          <TextField
            label="Additional Details"
            className="InputWidth"
            value={dataState.details || ""}
            onChange={dataState.handleChangeValue('details')}
            margin="normal"
            variant="outlined"
            multiline
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

export default PageThree;
