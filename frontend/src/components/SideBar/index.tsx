import React from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PieChartIcon from "@mui/icons-material/PieChart";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import CubeIcon from "@mui/icons-material/ViewInAr"; // Replace with suitable icon

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                "& .MuiDrawer-paper": {
                    width: "80px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRight: "1px solid #e0e0e0",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                },
            }}
        >
            {/* Top Logo */}
            <Box
                sx={{
                    marginBottom: "20px",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <IconButton
                    sx={{
                        padding: "10px",
                        backgroundColor: "#0044cc",
                        "&:hover": { backgroundColor: "#0033a1" },
                        color: "white",
                    }}
                >
                    <img
                        src="/path/to/logo.png" // Replace with the actual path to your logo
                        alt="Logo"
                        style={{ width: "30px", height: "30px" }}
                    />
                </IconButton>
            </Box>

            {/* Menu Icons */}
            <IconButton sx={{ color: "#555", margin: "10px 0" }}>
                <DashboardIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", margin: "10px 0" }}>
                <PieChartIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", margin: "10px 0" }}>
                <DescriptionIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", margin: "10px 0" }}>
                <PeopleIcon />
            </IconButton>
            <IconButton sx={{ color: "#555", margin: "10px 0" }}>
                <CubeIcon />
            </IconButton>
        </Drawer>
    );
};

export default Sidebar;
