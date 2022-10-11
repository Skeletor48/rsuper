import "./styles/TopBarStyle.css";
import { SelectChangeEvent } from '@mui/material/Select';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LanguageSelector from './LanguageSelector'

type TopBarProps = {
   countryCode : string,
   handleSelect: (event: SelectChangeEvent) => void,
}

function TopBar(props: TopBarProps) {

  const resetInput = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await navigator.clipboard.writeText('');
    window.location.reload();
    return false;
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" >
            RSUper Tax Helper &nbsp; <RequestQuoteIcon/>
          </div>
          <button className="clear-button" onClick={resetInput}>Reset</button>
          <LanguageSelector
            countryCode={props.countryCode}
            handleSelect={props.handleSelect}
          />
        </div>
      </nav>
    </>
  );
}

export default TopBar;
