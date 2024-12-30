import { Box, Button, Card, Divider, Typography } from "@mui/material"
import userImage from '../../images/user.png'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


interface BasicInfoSectionProps {
    setActiveTab: Function;
    activeTab: number
}

function BasicInfoSection({ setActiveTab, activeTab }: BasicInfoSectionProps) {

    return (
        <Card sx={styles.root}>
            <Box sx={styles.avatarBox}>
                <Box component={'img'} src={userImage} alt="user image" sx={styles.avatar} />
                <CameraAltOutlinedIcon fontSize="large" sx={styles.avatarIcon} />
            </Box>

            <Typography sx={styles.name}>  John Smith </Typography>
            <Typography sx={styles.subTitle}>  Senior Product Manager </Typography>

            <Divider sx={styles.divider} />

            <Button variant="text" href="#" sx={styles.btn(activeTab === 1)} onClick={() => setActiveTab(1)}>
                Personal Information
            </Button>
            <Button variant="text" href="#" sx={styles.btn(activeTab === 2)} onClick={() => setActiveTab(2)} >
                Financial Information
            </Button>

        </Card >
    )
}

const styles = {
    root: {
        boxShadow: '0px 4px 20px 0px rgba(238, 238, 238, 0.5)',
        padding: '24px',
        borderRadius: '24px',
        width: { xs: '100%', md: 'min(100%,393px)' },
        height: 'fit-content'

    },
    avatarBox: {
        position: 'relative',
        width: 'max-content'
    },
    avatar: {
        width: '120px',
        height: '120px',
        borderRadius: '39px'
    },
    avatarIcon: {
        position: 'absolute',
        bottom: '10px',
        right: '-10px',
        backgroundColor: 'rgba(240, 240, 240, 1)',
        padding: '8px',
        borderRadius: '50%'
    },
    name: { mt: '16px', mb: "8px", fontWeight: '600', fontSize: '20px' },
    subTitle: {
        color: "text.secondary",
        fontWeight: '400', fontSize: '16px'
    },
    divider: { my: '16px' },
    btn: (active: boolean) => ({
        p: '16px',
        fontWeight: '400', fontSize: '18px',
        color: active ? 'rgba(15, 108, 189, 1)' : "rgba(5, 29, 73, 1)",
        backgroundColor: active ? 'rgba(244, 248, 254, 1)' : "#FFF",
        width: '100%',
        justifyContent: 'start',
        textTransform: 'capitalize'
    })
}

export default BasicInfoSection