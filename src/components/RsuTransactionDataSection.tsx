import React, {useState} from 'react';
import {createStyles, makeStyles,} from "@material-ui/core";
import RsuTransactionDetailsBox from "./RsuTransactionDetailsBox";
import RsuTransactionInputBox from "./RsuTransactionInputBox";
import BankList from "./BankList"

const useStyles = makeStyles(() => createStyles({
    detailContainer : {
      display : "flex",
      flexDirection : "row",
      justifyContent: 'center',
    },
}))

type RsuTransactionDataSectionProps = {
    countryCode : string | any,
}

type InputValues = {
    name : string,
    taxNumber : string,
    amount : string,
}

type DetailValues = {
   name : string,
   taxNumber: string,
   transactionAmount : string,
   isCalculated: boolean,
}

function RsuTransactionDataSection(props:RsuTransactionDataSectionProps) {

  const classes = useStyles();

  const [inputValues,setInputValues] = useState<InputValues>({
      name : '',
      taxNumber : '',
      amount : '',
  });

  const [detailValues,setDetailValues] = useState<DetailValues>({
    name : '',
    taxNumber: '',
    transactionAmount : '',
    isCalculated: false,
  });

  const handleSub = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      setDetailValues({
        name : inputValues.name,
        taxNumber: inputValues.taxNumber,
        transactionAmount : inputValues.amount,
        isCalculated: true,
      });
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({...inputValues,[event.target.name] : event.target.value});
      console.log('change')
  }

  return (
    <div className={classes.detailContainer}>
      <div>
        <RsuTransactionInputBox values={inputValues}  buttonHandler={handleSub} changeHandler={handleChange} />
        <BankList countryCode={props.countryCode} />
      </div>
      <div>
        <RsuTransactionDetailsBox values={detailValues} />
      </div>
    </div>
  );
}

export default RsuTransactionDataSection;
