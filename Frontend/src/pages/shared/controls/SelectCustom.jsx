import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import React from "react";

export default function SelectCustom(props) {
    const {name, label, value, onChange, options} = props
    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select 
            label={label}
             name={name} 
             value={value}
             onChange={onChange}>
                 <MenuItem value=""> Decide later</MenuItem>
                {
                    options.map(
                        (item) => <MenuItem key={item.id} value={item.id}> {item.title}</MenuItem>
                    )
                }
             </Select>
        </FormControl>
    )
}