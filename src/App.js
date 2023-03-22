import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Thumbnail1 from './Thumbnail/Thumbnail1'
import Thumbnail2 from './Thumbnail/Thumbnail2'
import Thumbnail3 from './Thumbnail/Thumbnail3'
import PDFStyle1 from './PDF/PDFStyle1'
import PDFStyle2 from './PDF/PDFStyle2'
import PDFStyle3 from './PDF/PDFStyle3'
import { PDFViewer, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import useMediaQuery from '@mui/material/useMediaQuery';


const styles = StyleSheet.create({
  viewer: {
    width: "240px",
    height: "405px",
    borderRadius: '7px'
  }
});


function App() {
  const smallScreen = useMediaQuery("(max-width: 900px)");

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


  function MobileThumbnail() {
    return (<>
      <PDFDownloadLink style={{ textDecoration: 'none' }} document={<PDFStyle1 data={data} />} fileName="form1.pdf">

        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : <Thumbnail1 data={data} />
        }
      </PDFDownloadLink>
      <PDFDownloadLink style={{ textDecoration: 'none' }} document={<PDFStyle2 data={data} />} fileName="form2.pdf">

        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : <Thumbnail2 data={data} />
        }
      </PDFDownloadLink>
      <PDFDownloadLink style={{ textDecoration: 'none' }} document={<PDFStyle3 data={data} />} fileName="form3.pdf">

        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : <Thumbnail3 data={data} />
        }
      </PDFDownloadLink>
    </>)
  }


  function DesktopThumbnail() {
    return (<>
      <PDFViewer style={styles.viewer}>
        <PDFStyle1 data={data} />
      </PDFViewer>
      <PDFViewer style={styles.viewer}>
        <PDFStyle2 data={data} />
      </PDFViewer>
      <PDFViewer style={styles.viewer}>
        <PDFStyle3 data={data} />
      </PDFViewer>
    </>)
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
          {smallScreen ?
            < MobileThumbnail />
            :
            < DesktopThumbnail />
          }

        </Box>
        :
        <div></div>
      }
    </>
  );
}

export default App;