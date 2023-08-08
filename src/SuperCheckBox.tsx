import React, {ChangeEvent} from 'react';
import {Checkbox} from "@mui/material";

export type PropsType = {
    checked: boolean
    callback: (newIsDoneValue: boolean) => void
}
export const SuperCheckBox = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        props.callback(e.currentTarget.checked)
    }

    return (
        <Checkbox
            checked={props.checked}
            color="primary"
            onChange={onChangeHandler}
        />

    )

};

export default SuperCheckBox;

