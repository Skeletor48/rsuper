import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import RsuTransactionDataSection from "./components/RsuTransactionDataSection"

import TopBar from "./components/TopBar";

const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    background: 'linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(230,114,28,1) 35%, rgba(0,212,255,1) 100%)',
  },
  [theme.breakpoints.up('md')]: {
    background: 'linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(230,114,28,1) 35%, rgba(0,212,255,1) 100%)',
    padding: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    background: 'linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(230,114,28,1) 35%, rgba(0,212,255,1) 100%)',
    padding: '40px',
  },
}));

const AppBody = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    margin: 'auto',
    height: '100%',
    width: '100%',
  },
  [theme.breakpoints.up('xl')]: {
    background: 'linear-gradient(29deg, rgba(2,0,36,1) 0%, rgba(28,159,230,0.8926164215686274) 35%, rgba(0,212,255,1) 100%)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    margin: 'auto',
    width: '60%',
  },
}));

function App() {

  const [countryCode,setCountryCode] = useState<string>('HUN');

  return (
    <Root>
        <AppBody>
          <TopBar/>
          <RsuTransactionDataSection countryCode={countryCode}/>
        </AppBody>
    </Root>
  );
}

export default App;
