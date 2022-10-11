import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";

import RsuInputField from "./RsuInputField";

const useStyles = makeStyles(() => createStyles({
    form : {
        display : "flex",
        flexDirection : "column",
        alignSelf: "auto"
    },
    container : {
        textAlign : "center",
        width: 400,
        height: 400,
        margin: '20px',
        padding: '30px',
        background: 'rgba(172, 197, 208, 0.2)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(172, 197, 208, 0.3)',
    },
    title : {
        margin:"0px 0 20px 0"
    },
    button : {
        margin:"20px 0",
        background: 'rgba(18, 32, 224, 0.39)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(18, 32, 224, 0.63)',
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
        <Paper className={classes.container} >
            <Typography className={classes.title} variant={"h4"} >{props.formTitle}</Typography>
            <form className={classes.form} onSubmit={(e) => props.buttonHandler(e)} >
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
