import React from 'react';
import '../App.css';

function AgentNotOnline({ values, setValue, handleChangeValue }) {

  return (
    <div>

      <h3>No available agents right now</h3>
      <p>
        There are currently no available agents available to process requests. <br/>
        Please contact us directly to request service. <a href="tel:123-456-7890">123-456-7890</a>
       </p>

      <h3>Typical agent hours</h3>
      <p>
        Monday - Friday: 8am - 8pm <br/>
        Saturday: 10am - 8pm <br/>
        Sunday: 10am - 6pm
      </p>

    </div>
  );
}

export default AgentNotOnline;
