import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const styles = {
    page: {
        p: 4,
        bgcolor: '#FEFFDE',
        border: '2px solid #2E4F4F',
        width: "10rem",
        height: "18rem",
        userSelect: 'none',
        fontFamily: 'Roboto',
        borderRadius: '7px',
        overflow: 'hidden',
        wordSpacing: '0px',
        position: 'relative'
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
    },
    viewer: {
        width: "240px", //the pdf viewer will take up all of the width and height
        height: "405px"
    },
    headers: {
        fontSize: '11px',
        color: "#52734D",
        backgroundColor: '#DDFFBC',
    },
    text: {
        color: "#52734D",
        fontSize: '11px'
    }

};

// Create Document Component
function BasicDocument(props) {
    const fName = props.data.fName
    const lName = props.data.lName
    const email = props.data.email
    const bio = props.data.bio

    return (
        <Box
            sx={styles.page}
        >
            <Box
                sx={styles.section}
            >
                <p style={styles.headers}>First Name: </p>
                <p style={styles.text}>{fName}</p>
            </Box>
            <Box
                sx={styles.section}
            >
                <p style={styles.headers}>Last Name: </p>
                <p style={styles.text}>{lName}</p>
            </Box>
            <Box
                sx={styles.section}
            >
                <p style={styles.headers}>Email: </p>
                <p style={styles.text}>{email}</p>
            </Box>
            <Box sx={styles.section}>
                <p style={styles.headers}>Bio: </p>
            </Box>
            <Box sx={styles.section}>
                <p style={{
                    color: "#52734D",
                    fontSize: '8px'
                }}>{bio}</p>
            </Box>
            <Button variant="contained" color="success" sx={{ position: 'absolute', bottom: 5 }}>Download Now</Button>

        </Box>

    );
}
export default BasicDocument;