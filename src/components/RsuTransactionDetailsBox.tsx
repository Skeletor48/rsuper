import RsuForm from "./RsuForm";
import * as CONSTANTS from "../constants";

interface NavDetail {
  TYPE: number,
  TITLE: string,
  ACCOUNT_NUMBER: string,
  DESCRIPTION_ENDING: string,
  FORMULA: (amount: number) => number,
}

// type FormFields = {
//    description : string,
//    accountNumber: string,
//    transactionAmount : string,
// }

type DetailValues = {
   name : string,
   taxNumber: string,
   transactionAmount : string,
   isCalculated: boolean,
}

type RsuTransactionDetailsBoxProps = {
    buttonHandler?: (event: React.FormEvent<HTMLFormElement>) => void,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: DetailValues
}

const RsuTransactionDetailsBox = (props: RsuTransactionDetailsBoxProps) => {

  const navDetails = Object.values(CONSTANTS.NAV_DETAILS);

  const handleCopy = (event : React.MouseEvent<HTMLInputElement>) => {
    navigator.clipboard.writeText((event.target as HTMLInputElement).value);
  }

  const getTransactionAmount = (navDetail : NavDetail) => {
    const amount = Number(props.values['transactionAmount'].replace(/\s/g,''));
    return String(navDetail.FORMULA(amount));
  }

  const handleCopyAll = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToSave =['description', 'accountNumber', 'transactionAmount'].reduce((savedDetail: string, detail: string)=>{
      return `${savedDetail}
${(event.currentTarget.elements.namedItem(detail) as HTMLInputElement).value}`;
    },'')
    navigator.clipboard.writeText(dataToSave);
  }

  const getValues = (navDetailType : number) => {
    const navDetail = navDetails.filter(detail => detail.TYPE === navDetailType);
    let valuesMap= new Map<string, string>([
      ['description', ''],
      ['accountNumber', ''],
      ['transactionAmount', '']
    ]);

    if (props.values['isCalculated']) {
      valuesMap= new Map<string, string>([
        ['description', `${props.values['name']}  ${props.values['taxNumber']} ${navDetail[0].DESCRIPTION_ENDING}`],
        ['accountNumber', `${navDetail[0].ACCOUNT_NUMBER}`],
        ['transactionAmount', getTransactionAmount(navDetail[0])]
      ]);
    }

    return valuesMap;

  }


    return (
      <div>
          <div>
          { navDetails.map(item=>(
            <RsuForm
            key={item.TITLE}
            formTitle={item.TITLE}
            fieldNames={['description','accountNumber','transactionAmount']}
            buttonName= {'Copy All'}
            buttonHandler={(e:React.FormEvent<HTMLFormElement>)=>handleCopyAll(e)}
            changeHandler={props.changeHandler}
            clickHandler={handleCopy}
            values={getValues(item.TYPE)}
            isReadOnly={true}/>
          ))}

          </div>
      </div>
    );
}

export default RsuTransactionDetailsBox;
