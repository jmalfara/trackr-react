import React from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import MyLocationIcon from '@material-ui/icons/MyLocation';

function PageOne({ systemState, dataState, readonly }) {

  const handleLocationButtonClicked = name => {
    console.log("Clicked Location")
    dataState.update("address", "201 Chancellors Way, Guelph ON");
  }

  const onSubmit = e => {
      e.preventDefault();
      //TODO Validate Address.

      // Navigate to the next page.
      systemState.update("currentPage", systemState.currentPage + 1)
  }

  return (
    <div>

      {
          readonly ? null:
          <div>
            <h3>Requesting a Tow Service?</h3>
            <p>We need some information before we can send a truck</p>
          </div>
      }

      <h3>Where are you located?</h3>
      <p>Please tell us where you are located or select the auto location picker</p>

      <form onSubmit={onSubmit} className="Container">

          <div className="InlineInputContainer">
            <TextField
              required
              id="current-location"
              label="Current Location"
              className="InputWidth"
              value={dataState.address || ""}
              onChange={dataState.handleChangeValue('address')}
              variant="outlined"
              disabled={readonly}
            />

            {
              readonly ? null :
              <IconButton aria-label="delete" onClick={handleLocationButtonClicked}>
                <MyLocationIcon />
              </IconButton>
            }
          </div>

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

export default PageOne;
