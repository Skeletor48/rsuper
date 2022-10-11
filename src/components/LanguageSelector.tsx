import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Flag from 'react-world-flags';

const dropdownStyle = {
  padding: '8px 20px',
  marginRight: '20px',
}

type SiteSelectorProps = {
   countryCode : string,
   handleSelect: (event: SelectChangeEvent) => void,
}

function SiteSelector(props: SiteSelectorProps) {
  return (
    <>
        <Select
          variant={'standard'}
          sx={dropdownStyle}
          autoWidth={true}
          value={props.countryCode}
          onChange={props.handleSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem  value={'HUN'}><Flag code={ 'HUN' } height="16" /></MenuItem>
          <MenuItem value={'GBR'}><Flag code={ 'GBR' } height="16" /></MenuItem>
        </Select>
    </>
  );
}

export default SiteSelector;
