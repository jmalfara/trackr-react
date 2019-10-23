import React from 'react';
import '../App.css';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import PageOne from './pageOne.js';
import PageTwo from './pageTwo.js';
import PageThree from './pageThree.js';

function Confirmation(props) {
  return (
    <div>

      <h3>Confirm the Details</h3>
      <p>Please double check the details entered below before procceeding</p>

      <Divider variant="middle" />
      <PageOne readonly {...props} />
      <PageTwo readonly {...props} />
      <PageThree readonly {...props} />

      <Button variant="contained" color="primary" type="submit" onClick={props.submitRequest}>
        Send Request
      </Button>
    </div>
  );
}

export default Confirmation;
