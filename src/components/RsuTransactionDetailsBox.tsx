import RsuForm from "./RsuForm";
import * as CONSTANTS from "../constants";

interface TaxDetail {
  TYPE: number,
  TITLE: string,
  ACCOUNT_NUMBER: string,
  DESCRIPTION_ENDING: string,
  FORMULA: (amount: number) => number,
}

type DetailValues = {
   name : string,
   taxNumber: string,
   transactionAmount : string,
   isCalculated: boolean,
}

type RsuTransactionDetailsBoxProps = {
    buttonHandler?: (event: React.FormEvent<HTMLFormElement>) => void,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    countryCode: string,
    values: DetailValues
}

const RsuTransactionDetailsBox = (props: RsuTransactionDetailsBoxProps) => {
  const taxDetails = Object.values(CONSTANTS.TAX_DETAILS[props.countryCode as keyof typeof CONSTANTS['TAX_DETAILS']].COUNTRY_SPECS);

  const handleCopy = (event : React.MouseEvent<HTMLInputElement>) => {
    navigator.clipboard.writeText((event.target as HTMLInputElement).value);
  }

  const getTransactionAmount = (taxDetail : TaxDetail) => {
    const amount = Number(props.values['transactionAmount'].replace(/\s/g,''));
    return String(taxDetail.FORMULA(amount));
  }

  const handleCopyAll = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToSave =['description', 'accountNumber', 'transactionAmount'].reduce((savedDetail: string, detail: string)=>{
      return `${savedDetail}
${(event.currentTarget.elements.namedItem(detail) as HTMLInputElement).value}`;
    },'')
    navigator.clipboard.writeText(dataToSave);
  }

  const getValues = (taxDetailType : number) => {
    const taxDetail = taxDetails.filter(detail => detail.TYPE === taxDetailType);
    let valuesMap= new Map<string, string>([
      ['description', ''],
      ['accountNumber', ''],
      ['transactionAmount', '']
    ]);

    if (props.values['isCalculated']) {
      valuesMap= new Map<string, string>([
        ['description', `${props.values['name']}  ${props.values['taxNumber']} ${taxDetail[0].DESCRIPTION_ENDING}`],
        ['accountNumber', `${taxDetail[0].ACCOUNT_NUMBER}`],
        ['transactionAmount', getTransactionAmount(taxDetail[0])]
      ]);
    }

    return valuesMap;

  }


    return (
      <div>
          { taxDetails.map((item, i)=>(
            <>
              <RsuForm
              key={`${item.TITLE}-${i}-${item.TYPE}`}
              formTitle={item.TITLE}
              fieldNames={['description','accountNumber','transactionAmount']}
              buttonName= {'Copy All'}
              buttonHandler={(e:React.FormEvent<HTMLFormElement>)=>handleCopyAll(e)}
              changeHandler={props.changeHandler}
              clickHandler={handleCopy}
              values={getValues(item.TYPE)}
              isReadOnly={true}/>
              <br/>
            </>
          ))}
      </div>
    );
}

export default RsuTransactionDetailsBox;
