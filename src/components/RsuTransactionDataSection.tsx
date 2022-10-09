import React, {useState} from 'react';
import RsuTransactionDetailsBox from "./RsuTransactionDetailsBox";
import RsuTransactionInputBox from "./RsuTransactionInputBox";
// import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";

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

function RsuTransactionDataSection() {

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
    <div >
        <div><RsuTransactionInputBox values={inputValues}  buttonHandler={handleSub} changeHandler={handleChange} /></div>
        <div><RsuTransactionDetailsBox values={detailValues} /></div>
    </div>
  );
}

export default RsuTransactionDataSection;
