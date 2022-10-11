import "./styles/TopBarStyle.css";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

function TopBar() {

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
        </div>
      </nav>
    </>
  );
}

export default TopBar;
