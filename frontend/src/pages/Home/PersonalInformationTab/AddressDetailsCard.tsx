import { Box, Button, Card, Typography } from "@mui/material"
import TitleWithInfo from "../../../components/TitleWithInfo"


function AddressDetailsCard() {
    return (
        <Card sx={styles.root}>
            <Box sx={styles.header}>
                <Typography sx={styles.title}> Address Details </Typography>
                <Button variant="contained" sx={styles.btn} > edit </Button>
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"Country"} subTitle={"Egypt"} />
                <TitleWithInfo title={"City"} subTitle={"Cairo"} />
                <TitleWithInfo title={"Postal Code"} subTitle={"11728"} />
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"Building"} subTitle={"7"} />
                <TitleWithInfo title={"Street"} subTitle={"Street 127 "} />
                <TitleWithInfo title={"Floor No."} subTitle={"7"} />
                <TitleWithInfo title={"Apartment"} subTitle={"72"} />
            </Box>

        </Card>
    )
}

const styles = {
    root: {
        boxShadow: '0px 4px 20px 0px rgba(238, 238, 238, 0.5)',
        padding: '40px',
        borderRadius: '20px',
        width: '100%'
    },
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    btn: { height: '36px', py: '8', minWidth: '104px', textTransform: 'capitalize' },
    title: { mt: '16px', mb: "8px", fontWeight: '500', fontSize: '20px' },
    cardRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }

}

export default AddressDetailsCard