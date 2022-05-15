import React from "react"
import Radio from '@mui/material/Radio';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';

export default function RadioGroupCustom(props) {
    const {name, label, value, onChange, items} = props
    return (
        <FormControl>
                 <RadioGroup row
                    label={label}
                    name={name}
                    value={value}
                    onChange={onChange}>
                    {
                        items.map(
                            (item, index) => ( 
                            <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title}></FormControlLabel>)
                            )
                    }
                                
                </RadioGroup>
        </FormControl>
    )
}