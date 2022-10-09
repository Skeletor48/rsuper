import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";

import RsuInputField from "./RsuInputField";

const useStyles = makeStyles(() => createStyles({
    form : {
        display : "flex",
        flexDirection : "column",
        alignSelf: "auto"
    },
    container : {
        backgroundColor : "#ffffff",
        position : "absolute",
        top : "25%",
        left : "80%",
        transform : "translate(-50%,-50%)",
        padding : 30,
        textAlign : "center"
    },
    title : {
        margin:"0px 0 20px 0"
    },
    button : {
        margin:"20px 0"
    }
}))


const labelMap= new Map<string, string>([
  ['name', 'Name'],
  ['taxNumber', 'Tax Number'],
  ['amount', 'RSU Amount',],
  ['description', 'Description'],
  ['accountNumber', 'Account Number'],
  ['transactionAmount','Transaction Amount']
]);

type RsuFormProps = {
    formTitle: string,
    fieldNames: string[],
    buttonName?: string,
    buttonHandler: (event: React.FormEvent<HTMLFormElement>) => void,
    clickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    isReadOnly?: boolean,
    values: Map<string, string>
}

const RsuForm = (props: RsuFormProps) => {
    const classes = useStyles();

    return (
        <Paper >
            <Typography variant={"h4"} >{props.formTitle}</Typography>
            <form onSubmit={(e) => props.buttonHandler(e)} >
            {props.fieldNames.map(fieldName => (
              <RsuInputField
              key={fieldName}
              changeHandler={props.changeHandler}
              clickHandler={props.clickHandler}
              label={labelMap.get(fieldName)}
              name={fieldName}
              value={props.values.get(fieldName)}
              readOnly={props.isReadOnly}/>
   ))}
                <Button type={"submit"} variant={"contained"} className={classes.button}>{props.buttonName}</Button>
            </form>
        </Paper>
    );
}

export default RsuForm;
