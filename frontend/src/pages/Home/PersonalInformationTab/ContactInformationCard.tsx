import { Box, Button, Card, Typography } from "@mui/material"
import TitleWithInfo from "../../../components/TitleWithInfo"


function ContactInformationCard() {
    return (
        <Card sx={styles.root}>
            <Box sx={styles.header}>
                <Typography sx={styles.title}> Contact Information </Typography>
                <Button variant="contained" sx={styles.btn} > edit </Button>
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"Personal Email"} subTitle={"John.smith@gmail.com"} />
                <TitleWithInfo title={"Mobile"} subTitle={"011223344556"} />
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
    title: { mt: '16px', mb: "8px", fontWeight: '500', fontSize: { xs: "14px", sm: '20px' } },
    cardRow: { display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: '10px' }

}

export default ContactInformationCard