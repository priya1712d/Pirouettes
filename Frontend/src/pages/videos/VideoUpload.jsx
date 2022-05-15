import { CloudUpload } from '@mui/icons-material';
import { Paper, Tooltip, styled } from '@mui/material';
import React from 'react';

const StyledIcon = styled(CloudUpload)(({ theme }) => ({
    margin: theme.spacing(1),
    display: 'relative',
    alignItems: 'right',
  }));

export default function VideoUpload(props) {
    return (
        <React.Fragment>
            <Paper>
            <Tooltip title="Upload video">
            <StyledIcon fontSize="large"> Upload Videos </StyledIcon>
            </Tooltip>
            </Paper>
        </React.Fragment>
    )
}