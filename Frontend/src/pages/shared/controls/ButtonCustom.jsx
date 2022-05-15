import { Button } from "@mui/material/";
import React from "react";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3),
}));

export default function ButtonCustom(props){
    const { text, size, color, variant, onClick, ...other} = props
    return(
        <StyledButton
        variant={variant || "contained"}
        size={size || "large"}
        color={color || 'primary'}
        onClick={onClick}
        {...other}
        >
            {text}
        </StyledButton>
    )
}