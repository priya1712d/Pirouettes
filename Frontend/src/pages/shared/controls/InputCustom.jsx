import React from "react"
import TextField from '@mui/material/TextField';

export default function InputCustom(props) {
    const {name, label, value, onChange} = props
    return (
        <div>
                <TextField 
                        variant="outlined" 
                        label={label} 
                        name={name}
                        defaultValue = {value}
                        onChange={onChange}
                        />
        </div>
    )
}