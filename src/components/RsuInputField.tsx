import React from "react";
import {TextField} from "@material-ui/core";

type RsuInputFieldProps = {
    label?: string,
    name: string,
    value?: string,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    clickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void,
    readOnly?: boolean,
}

const RsuInputField = (props: RsuInputFieldProps) => {
    return (
        <TextField
            autoComplete={"off"}
            label={props.label}
            name={props.name}
            value={props.value || ''}
            onChange={props.changeHandler}
            onClick={props.clickHandler}
            InputProps={{
              readOnly: props.readOnly,
         }}

            variant={"outlined"} //enables special material-ui styling
            size={"small"}
            margin={"dense"}
        />
    );
}

export default RsuInputField
