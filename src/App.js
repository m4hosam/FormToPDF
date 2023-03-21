import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PDFStyle1 from './PDFStyle1'
import PDFStyle2 from './PDFStyle2'
import PDFStyle3 from './PDFStyle3'
import { BlobProvider, Document, Page } from '@react-pdf/renderer';



function App() {
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    bio: ""
  })


  function handleTextChange(event) {
    const { name, value } = event.target;
    setData(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true)
  }

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        sx={{ my: 10 }}
        flexDirection="column"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          name="fName"
          type="text"
          onChange={handleTextChange}
          sx={{ my: 2, width: { xs: '20rem', md: '30rem' } }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          name="lName"
          type="text"
          onChange={handleTextChange}
          sx={{ my: 2, width: { xs: '20rem', md: '30rem' } }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          name="email"
          type="email"
          onChange={handleTextChange}
          sx={{ my: 2, width: { xs: '20rem', md: '30rem' } }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Bio"
          name="bio"
          type="text"
          onChange={handleTextChange}
          multiline
          sx={{ my: 2, width: { xs: '20rem', md: '30rem' } }}
          rows={10}

        />


        <Button type='submit' color='success' variant="contained" sx={{ my: 5, width: { xs: '20rem', md: '30rem' } }}>Render</Button>
      </Box>
      {submitted ?
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'row' }}
          sx={{ mx: { lg: 30, md: 10 } }}
        >
          <BlobProvider document={<PDFStyle1 data={data} />}>

            {({ blob, url, loading }) => {
              return loading ? <>asd</> : (
                <Document file={url}
                  onLoadSuccess={(pdf) => this.handleLoadSuccess(pdf, blob)}
                  renderMode="canvas">
                  <Page pageNumber={1}
                    width={window.innerWidth} />
                </Document>
              );
            }}
          </BlobProvider>
          <PDFStyle2 data={data} />
          <PDFStyle3 data={data} />
        </Box>
        :
        <div></div>
      }
    </>
  );
}

export default App;