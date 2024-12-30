import { Box, Breadcrumbs, Link, Typography } from "@mui/material"

function Header() {
    return (
        <Box sx={styles.root}>
            <Typography sx={styles.title}>
                John Smith Profile
            </Typography>

            <Breadcrumbs aria-label="breadcrumb"
                separator="›"
            >
                <Link underline="none" color="inherit" href="#">
                    Dashboard
                </Link>
                <Link underline="none" color="inherit" href="#" >
                    HR manage
                </Link>
                <Link underline="none" color="inherit" href="#" >
                    Employees
                </Link>
                <Typography sx={{ color: 'rgba(0, 63, 173, 1)' }}>
                    John Smith Profile
                </Typography>
            </Breadcrumbs>
        </Box>
    )
}

const styles = {
    root: {
        mb: '48px'
    },
    title: {
        fontWeight: '600', fontSize: '26px',
    }
}

export default Header