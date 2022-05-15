import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export function useForm(initialValues){

    const [data, setData] = useState(initialValues) 

    const handleInputChange = e => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    return {
        data,
        setData,
       handleInputChange
    }
}

const StyledForm = styled(FormControl)(({ theme }) => ({
    '& .MuiFormControl-root': {
                    width: '100%',
                    margin: theme.spacing(1),
                }
}));

export function NewRegistrationForm(props) {
    return (
        <div>
            <StyledForm>
                {props.children}
            </StyledForm>
        </div>
    )
}