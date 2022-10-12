import "./styles/TopBarStyle.css";
import * as React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import OfficeSiteSelector from './OfficeSiteSelector'

type TopBarProps = {
  countryCode: string,
  handleSelect: (event: SelectChangeEvent) => void,
}

const helpText = `
HOW TO USE:

- Enter the required data on the 'Transaction Data' form \n
- Press 'Calculate' \n
- Every calculated fields can be copied to the clipboard via clicking them \n
- Or you can click on 'Copy All' button and have them concatenated into one message \n
- Click on the 'open' icon under your bank's picture to open the banking site in a new window \n
- Use the 'Reset' button to clear clipboard and reset the fields to empty \n
- Clicking on the flags in the top right corner let you switch between the local tax specs \n
` as string

function TopBar(props: TopBarProps) {

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
          <div
            className="navbar-logo"
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose} >
            RSUper Tax Helper &nbsp; <RequestQuoteIcon />
          </div>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>
              <pre style={{ fontFamily: 'inherit' }}>
                {helpText}
              </pre>
            </Typography>
          </Popover>
          <Tooltip title="Erase clipboard and reset fields">
            <button className="clear-button" onClick={resetInput}>Reset</button>
          </Tooltip>
          <OfficeSiteSelector
            countryCode={props.countryCode}
            handleSelect={props.handleSelect}
          />
        </div>
      </nav>
    </>
  );
}

export default TopBar;
