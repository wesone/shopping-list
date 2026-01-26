'use client';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ResponsiveItemAdder from '@/components/adding/ResponsiveItemAdder';
import ShoppingList from '@/components/ShoppingList';

export default function Home() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Shopping List
                    </Typography>
                </Toolbar>
            </AppBar>
            <ResponsiveItemAdder />
            <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
                <Toolbar />
                <ShoppingList />
            </Box>
        </Box>
    );
}
