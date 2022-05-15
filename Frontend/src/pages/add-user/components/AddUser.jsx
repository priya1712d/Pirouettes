import React from 'react';
import Grid from '@mui/material/Grid';
import { NewRegistrationForm, useForm } from '../../shared/new-registration-form';
import Controls from '../../shared/controls/Controls';


const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    age: '',
    gender: 'female',
    lookingFor: '',
    availability: '',
}

const genderItems = [
    {
        id:'male',
        title:'Male'
    },
    {
        id:'female',
        title:'Female'
    },
    {
        id:'other',
        title:'Others'
    }
]

const availabilityItems = [
    {
        id:'daily',
        title:'Daily'
    },
    {
        id:'weekly',
        title:'Weekly'
    },
    {
        id:'weekends',
        title:'Weekends only'
    },
    {
        id:'occasionaly',
        title:'Occasionaly'
    }
]

const lookingForItems = [
    {
        id:'kids',
        title:'Kids dance troupe'
        
    },
    {
        id:'adults',
        title:'Adult dance troupe'
    },
    {
        id:'jam',
        title:'Friendly Jam sessions'
    }
]

export default function AddUser(props) {

    const { data, setData, handleInputChange}  = useForm(initialValues)
    const { handler } = props

    return (
        <NewRegistrationForm>
            <Grid container>
                <Grid item xs={12}>
                    <Controls.InputCustom 
                    label="Full Name" 
                    name="fullName" 
                    value={data.fullName} 
                    onChange={handleInputChange}/>
                    
                    <Controls.InputCustom 
                    label="Email" 
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}/>

                    <Controls.RadioGroupCustom
                    label="Gender"
                    name="gender"
                    value={data.gender}
                    onChange={handleInputChange}
                    items={genderItems}>
                    </Controls.RadioGroupCustom>

                    <Controls.SelectCustom
                    name="availability"
                    label="Availability"
                    value="availability"
                    onChange={handleInputChange}
                    options={availabilityItems}/>

                    <Controls.SelectCustom
                    name="lookingFor"
                    label="Looking For"
                    value="lookingFor"
                    onChange={handleInputChange}
                    options={lookingForItems}/>
                    
                    <div>
                    <Controls.ButtonCustom 
                    type="submit"
                    text="Register"/>

                    <Controls.ButtonCustom 
                    variant="text"
                    text="Cancel"
                    onClick={() => handler(false)}/>
                    </div>
                </Grid>
            </Grid>
        </NewRegistrationForm>
    );
}