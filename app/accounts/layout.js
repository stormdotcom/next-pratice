import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import Link from 'next/link';

const layout = ({ children }) => {
    return <div>
        <h1> Accounts </h1>
        <Box
            sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
            <Box >  <Link href="/accounts">Basic Details</Link>
            </Box>
            <Box >  <Link href="/accounts/settings">Settings</Link>
            </Box>
            <Box >  <Link href="/accounts/subscription">Subscription</Link>
            </Box>
        </Box>
        {children}
    </div>;
};

export default layout;
