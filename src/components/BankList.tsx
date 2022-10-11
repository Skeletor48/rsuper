import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import * as CONSTANTS from "../constants";

type BankListProps = {
    countryCode: string,
}

const BankList = (props: BankListProps) =>  {
  console.log(props.countryCode)
  return (
    <ImageList sx={{
      width: 400,
      height: 400,
      margin: '20px',
      padding: '30px',
      background: 'rgba(172, 197, 208, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      border: '1px solid rgba(172, 197, 208, 0.3)',
    }}
      gap={8} rowHeight={'auto'}>
      {CONSTANTS.TAX_DETAILS.HUN.BANK_DETAILS.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                href={item.link}
                target="_blank"
              >
                <OpenInNewIcon  />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default BankList;
