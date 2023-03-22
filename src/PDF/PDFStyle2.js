import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FEFFDE",
        color: "white",
        padding: 50
    },
    section: {
        margin: 10,
        padding: 10,
        flexDirection: 'row',
    },
    section2: {

        flexDirection: 'column',
    },
    viewer: {
        width: "240px", //the pdf viewer will take up all of the width and height
        height: "405px",
        borderRadius: '7px'
    },
    headers: {
        color: "#52734D",
        fontSize: '25px',
        backgroundColor: '#DDFFBC',

    },
    text: {
        color: "#52734D",
        fontSize: '20px'
    }

});

// Create Document Component
function BasicDocument(props) {
    const fName = props.data.fName
    const lName = props.data.lName
    const email = props.data.email
    const bio = props.data.bio

    return (

        <Document>
            {/*render a single page*/}
            <Page size="A4" style={styles.page}>
                <View style={styles.section} >
                    <Text style={styles.headers}>First Name:  </Text>
                    <Text style={styles.text}>{fName}</Text>

                </View>
                <View style={styles.section}>
                    <Text style={styles.headers}>Last Name:  </Text>
                    <Text style={styles.text}>{lName}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.headers}>Email:  </Text>
                    <Text style={styles.text}>{email}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.headers}>Bio: </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>{bio}</Text>

                </View>
            </Page>
        </Document>
    );
}
export default BasicDocument;