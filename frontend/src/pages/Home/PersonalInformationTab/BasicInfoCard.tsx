import { Box, Button, Card, Typography } from "@mui/material"
import TitleWithInfo from "../../../components/TitleWithInfo"


function BasicInfoCard() {
    return (
        <Card sx={styles.root}>
            <Box sx={styles.header}>
                <Typography sx={styles.title}> Basic Information </Typography>
                <Button variant="contained" sx={styles.btn} >
                    edit
                </Button>
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"National ID Number"} subTitle={"29702031400693"} />
                <TitleWithInfo title={"National ID Expiring Date"} subTitle={"01 / 04 / 2025"} />
                <TitleWithInfo title={"Title"} subTitle={"Mr."} />
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"First Name"} subTitle={"John"} />
                <TitleWithInfo title={"Father Namee"} subTitle={"---"} />
                <TitleWithInfo title={"Grand Father Name"} subTitle={"-- -- --"} />
                <TitleWithInfo title={"Family Name"} subTitle={"-- -- --"} />
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"الأسم الأول"} subTitle={"John"} />
                <TitleWithInfo title={"اسم الأب"} subTitle={"---"} />
                <TitleWithInfo title={"اسم الجد"} subTitle={"-- -- --"} />
                <TitleWithInfo title={"اللقب / اسم العائلة"} subTitle={"-- -- --"} />
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"Date of birth"} subTitle={"John"} />
                <TitleWithInfo title={"Gender"} subTitle={"---"} />
                <TitleWithInfo title={"Nationality"} subTitle={"-- -- --"} />
                <TitleWithInfo title={"Additional Nationality"} subTitle={"-- -- --"} />
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"Passport No."} subTitle={"John"} />
                <TitleWithInfo title={"Passport Issue Date"} subTitle={"---"} />
                <TitleWithInfo title={"Passport Expiry Date"} subTitle={"-- -- --"} />
            </Box>

            <Box sx={styles.cardRow}>
                <TitleWithInfo title={"Marital Status"} subTitle={"John"} />
                <TitleWithInfo title={"Dependencies"} subTitle={"---"} />
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

export default BasicInfoCard