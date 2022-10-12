import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Flag from 'react-world-flags';

const dropdownStyle = {
  padding: '8px 20px',
  marginRight: '20px',
}

type OfficeSiteSelectorProps = {
   countryCode : string,
   handleSelect: (event: SelectChangeEvent) => void,
}

function OfficeSiteSelector(props: OfficeSiteSelectorProps) {
  return (
    <>
    <Tooltip title="Select Cloudera Office Site for local tax settings" placement="top">
        <Select
          variant={'standard'}
          sx={dropdownStyle}
          autoWidth={true}
          value={props.countryCode}
          onChange={props.handleSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'HUN'}><Flag code={ 'HUN' } height="12" /></MenuItem>
          <MenuItem value={'GBR'}><Flag code={ 'GBR' } height="12" /></MenuItem>
          <MenuItem value={'ESP'}><Flag code={ 'ESP' } height="12" /></MenuItem>
        </Select>
    </Tooltip>
    </>
  );
}

export default OfficeSiteSelector;
