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
}

function RsuTransactionDataSection() {

  const [inputValues,setInputValues] = useState<InputValues>({
      name : "",
      taxNumber : '0',
      amount : '0',
  });

  const [detailValues,setDetailValues] = useState<DetailValues>({
    name : '',
    taxNumber: '',
    transactionAmount : '0',
  });

  const handleSub = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      setDetailValues({
        name : inputValues.name,
        taxNumber: inputValues.taxNumber,
        transactionAmount : inputValues.amount,
      });
  }

  const handleCopyAll = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // debugger;
    // const dataToSave =['description', 'accountNumber', 'transactionAmount'].reduce((savedDetail,detail)=>{
    //   return `${savedDetail} ${event.target.elements[detail].value}`;
    // },'')
    // navigator.clipboard.writeText(dataToSave);
    // console.log('clicked',event);
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({...inputValues,[event.target.name] : event.target.value});
      console.log('change')
  }

  return (
    <div >
        <div><RsuTransactionInputBox values={inputValues}  buttonHandler={handleSub} changeHandler={handleChange} /></div>
        <div><RsuTransactionDetailsBox values={detailValues} buttonHandler={handleCopyAll} changeHandler={handleChange} /></div>
    </div>
  );
}

export default RsuTransactionDataSection;
