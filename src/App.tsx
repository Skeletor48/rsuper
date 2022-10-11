import React, {useState} from 'react';
import {createStyles, makeStyles,} from "@material-ui/core";
import RsuTransactionDataSection from "./components/RsuTransactionDataSection"

import TopBar from "./components/TopBar";

const useStyles = makeStyles(() => createStyles({
    appBody : {
      background: 'linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(230,114,28,1) 35%, rgba(0,212,255,1) 100%)',
      padding: '30px',
    },
    dataSection : {
      background: 'linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(28,159,230,0.8926164215686274) 35%, rgba(0,212,255,1) 100%)',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      margin: 'auto',
      width: '60%',
      height: '90%',

    },
}))

function App() {

  const classes = useStyles();

  const [countryCode,setCountryCode] = useState<string>('HUN');

  return (
    <div className={classes.appBody}>
        <div className={classes.dataSection}>
          <TopBar/>
          <RsuTransactionDataSection countryCode={countryCode}/>
        </div>
    </div>
  );
}

export default App;
