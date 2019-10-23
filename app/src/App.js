import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import BackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import PageAgentNotOnline from './components/pageAgentNotOnline.js';

import PageOne from './components/pageOne.js';
import PageTwo from './components/pageTwo.js';
import PageThree from './components/pageThree.js';

import ConfirmationPage from './components/pageConfirmation.js';

import { checkAgentAvailability, sendTransactionRequest } from "./Firebase"

function App(props) {
  // Data State
  const [dataState, setDataState] = React.useState({
    address: "201 Chancellors Way, Guelph ON",
    color: "Grey",
    details: "Here are some extra details↵↵about this car↵↵here you go",
    manufacturer: "Hyundai",
    model: "Sonata",
    year: "2012",
  });

  // System State
  const [systemState, setSystemState] = React.useState({
    fetchingAgents: true,
    agentAvailable: true,
    systemError: false,
    currentPage: 0
  })

  const handleOnBack = () => {
    if (systemState.currentPage !== 0) {
      setSystemState({ ...systemState, "currentPage": systemState.currentPage - 1 })
    }
  }

  const submitRequest = () => {

    const data = {
      details: { ...dataState }
    }

    checkAgentAvailability(props).then((doc) => {
      const available = doc.data().available

      if (available) {
        sendTransactionRequest(props, data).then((doc) => {
          console.log("Success")
        }).catch((error) => {
          console.error("Error", error);
        });
      } else {
        setSystemState({ ...systemState, agentAvailable: false, currentPage: 0 })
      }
    }).catch((error) => {
      console.error("Error", error);
    })
  }

  const pageProps = {
    dataState: {
      ...dataState,
      update: (name, value) => setDataState({ ...dataState, [name]: value }),
      handleChangeValue: name => event => {
        setDataState({ ...dataState, [name]: event.target.value });
      }
    },
    systemState: {
      ...systemState,
      update: (name, value) => setSystemState({ ...systemState, [name]: value })
    },
    submitRequest: submitRequest
  }

  // Only fetch the agents once
  if (systemState.fetchingAgents) {
    checkAgentAvailability(props).then((doc) => {
     setSystemState({ ...systemState, agentAvailable: doc.data().available, fetchingAgents: false })
    }).catch((error) => {
      console.error("Error", error);
    })
  }

  const getCurrentPage = () => {
    if (systemState.systemError) {
      return <p>Something went wrong...</p>
    }

    if (systemState.fetchingAgents) {
      return <p>Checking Agent Availability...</p>
    }

    if (systemState.agentAvailable === false) {
      return <PageAgentNotOnline />
    }

    switch (systemState.currentPage) {
      case 0:
        return <PageOne {...pageProps} />
      case 1:
        return <PageTwo {...pageProps} />
      case 2:
        return <PageThree {...pageProps} />
      case 3:
        return <ConfirmationPage {...pageProps} />
      default:
        return <p>Something went wrong...</p>
    }
  }

  const getBackNavigationButton = () => {
    if (systemState.currentPage <= 0) {
      return null
    }

     return <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOnBack}>
       <BackIcon />
     </IconButton>
  }

  return (
    <div className="App">

        <Container maxWidth="sm" className="Container">
          <Toolbar disableGutters>
            { getBackNavigationButton() }
          </Toolbar>
          { getCurrentPage() }
        </Container>
    </div>
  );
}

export default App;
