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
        backgroundColor: "#F9F7F7",
        color: "white",
        padding: 50
    },
    section: {
        margin: 10,
        padding: 10,
        textAlign: 'center',
    },
    viewer: {
        width: "240px", //the pdf viewer will take up all of the width and height
        height: "405px",
        borderRadius: '7px'
    },
    text: {
        color: "#444F5A",
        fontSize: '20px',
        alignItems: 'flex-start'
    }
});

// Create Document Component
function BasicDocument(props) {
    const fName = props.data.fName
    const lName = props.data.lName
    const email = props.data.email
    const bio = props.data.bio
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        {/* Add the First and last name together */}
                        <Text style={{
                            color: "#0F4C75",
                            fontSize: '35px',
                            fontWeight: '800'
                        }}>{fName} {lName}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.text}>{email}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={{
                            color: "#0F4C75",
                            fontSize: '27px'
                        }}>Bio</Text>
                    </View>
                    <View style={{
                        textAlign: 'left',
                    }}>
                        <Text style={styles.text}>{bio}</Text>

                    </View>
                </Page>
            </Document>
        </PDFViewer >
    );
}
export default BasicDocument;