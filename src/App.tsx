import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import RsuTransactionDataSection from "./components/RsuTransactionDataSection";
import Footer from "./components/Footer";

import TopBar from "./components/TopBar";

const Root = styled('div')(({ theme }) => ({
  // background-image: linear-gradient(135deg, #FAD961 0%, #F76B1C 100%);

  background: 'linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(230,114,28,1) 35%, rgba(0,212,255,1) 100%)',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    padding: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '40px',
  },
}));

const AppBody = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    margin: 'auto',
    width: '100%',
  },
  [theme.breakpoints.up('xl')]: {
    background: 'linear-gradient(29deg, rgba(2,0,36,0.3) 0%, rgba(28,159,230,0.3) 35%, rgba(0,212,255,0.3) 90%)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    margin: 'auto',
    width: '60%',
  },
}));

function App() {
  const [countryCode,setCountryCode] = useState<string>('HUN');

  const handleSelect = (event: SelectChangeEvent) => {
    setCountryCode(event.target.value);
  };

  return (
    <>
    <Root>
        <AppBody>
          <TopBar
          countryCode={countryCode}
          handleSelect={handleSelect}
          />
          <RsuTransactionDataSection
          countryCode={countryCode}
          />
        </AppBody>
    </Root>
    <Footer />
    </>
  );
}

export default App;
