import React, {useState} from "react";
import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";

import RsuInputField from "./RsuInputField";

const useStyles = makeStyles(() => createStyles({
    form : {
        display : "flex",
        flexDirection : "column",
    },
    container : {
        backgroundColor : "#ffffff",
        position : "absolute",
        top : "50%",
        left : "50%",
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

type Values = {
    name : string,
    ssnumber : number | null,
    amount : number,
}

const RsuForm = () => {

    const classes = useStyles();
    const [values,setValues] = useState<Values>({
        name : "",
        ssnumber : null,
        amount : 0,
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)
    }

    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>Transaction Data </Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
                <RsuInputField changeHandler={handleChange} label={"Name"} name={"name"}/>
                <RsuInputField changeHandler={handleChange} label={"Social Security Number"} name={"ssnumber"}/>
                <RsuInputField changeHandler={handleChange} label={"RSU Amount"} name={"amount"}/>
                <Button type={"submit"} variant={"contained"} className={classes.button}>Submit</Button>
            </form>
        </Paper>
    );
}

export default RsuForm;
