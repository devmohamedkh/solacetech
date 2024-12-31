import { Drawer, Box, IconButton } from "@mui/material";
import LogoIcon from '../../images/logo.svg'
import { ReactComponent as BoxIcon } from '../../images/Box.svg'
import { ReactComponent as CreditReportIcon } from '../../images/CreditReport.svg'
import { ReactComponent as ResearchIcon } from '../../images/Research.svg'
import { ReactComponent as TeamsIcon } from '../../images/Teams.svg'
import { ReactComponent as DashboardIcon } from '../../images/Dashboard.svg'

const Sidebar = () => {
    return (
        <Drawer variant="permanent" anchor="left" sx={styles.root}  >

            <Box sx={styles.logoContainer}>
                <Box
                    component={'img'}
                    src={LogoIcon}
                    alt="Logo"
                    style={styles.logoImg}
                />
            </Box>

            {/* Menu Icons */}
            <IconButton sx={styles.iconMenuItem} className="active">
                <DashboardIcon />
            </IconButton>
            <IconButton sx={styles.iconMenuItem}>
                <CreditReportIcon />
            </IconButton>
            <IconButton sx={styles.iconMenuItem}>
                <ResearchIcon />
            </IconButton>
            <IconButton sx={styles.iconMenuItem}>
                <TeamsIcon />
            </IconButton>
            <IconButton sx={styles.iconMenuItem}>
                <BoxIcon />
            </IconButton>
        </Drawer>
    );
};


const styles = {
    root: {
        "& .MuiDrawer-paper": {
            width: "80px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: "1px solid #e0e0e0",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        },
    },
    logoContainer: {
        my: "40px",
        display: "flex",
        justifyContent: "center",
    },
    logoBtn: {
        padding: "10px",
        color: "white",
    },
    logoImg: { width: "45px", height: "45px" },
    iconMenuItem: {
        color: "#555", margin: "10px 0px",
        "& .active": {
            backgroundColor: 'rgba(0, 63, 173, 1)'
        }
    }
}
export default Sidebar;
