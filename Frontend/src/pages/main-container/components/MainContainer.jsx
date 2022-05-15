import React, { useState } from "react"
import AddUser from "../../add-user/components/AddUser"
import Paper from '@mui/material/Paper';
import Controls from "../../shared/controls/Controls";
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    width: '30%'
}));

export default function MainContainer() {
    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(!showForm);
      }

    return (
        <div>
            <form>
                <Controls.ButtonCustom text="Join As a member" onClick={openForm}></Controls.ButtonCustom>
            </form>
      {showForm ? (
            <StyledPaper>
                <AddUser handler={setShowForm}/>
            </StyledPaper>
            ) : null}
        </div>
    )
}