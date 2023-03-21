import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function UserInput() {

    return (
        <>
            <TextField
                id="outlined-multiline-flexible"
                label="First Name"
                name="First Name"
                type="name"
                sx={{ my: 2, width: '30rem' }}
                maxRows={4}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Last Name"
                name="Last Name"
                type="name"
                multiline
                sx={{ my: 2, width: '30rem' }}
                maxRows={4}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Email"
                name="Email"
                type="email"
                multiline
                sx={{ my: 2, width: '30rem' }}
                maxRows={4}
            />
            <TextField
                id="outlined-multiline-flexible"
                label="Bio"
                name="Bio"
                type="text"
                multiline
                sx={{ my: 2, width: '30rem' }}
                rows={10}

            />


            <Button type='submit' color='success' variant="contained" sx={{ my: 5, width: '30rem' }}>Render</Button>
        </>
    );
}

export default UserInput;