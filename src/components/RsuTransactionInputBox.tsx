import RsuForm from "./RsuForm";

type InputValues = {
    name : string,
    taxNumber : string,
    amount : string,
}


type RsuTransactionInputBoxProps = {
    buttonHandler: (event: React.FormEvent<HTMLFormElement>) => void,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: InputValues
}

function RsuTransactionInputBox(props: RsuTransactionInputBoxProps) {

  const valuesMap= new Map<string, string>([
    ['name', props.values['name']],
    ['taxNumber', props.values['taxNumber']],
    ['amount',props.values['amount']]
  ]);

  return (
    <div>
        <div>
          <RsuForm
          formTitle={'Transaction Data'}
          fieldNames={['name','taxNumber','amount']}
          buttonName= {'Calculate'}
          buttonHandler={props.buttonHandler}
          changeHandler={props.changeHandler}
          isReadOnly={false}
          values={valuesMap}
          />
        </div>
    </div>
  );
}

export default RsuTransactionInputBox;
