import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import ItemAddForm from '@/components/adding/ItemAddForm';

export default function ItemAddDrawer() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: '30%',
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: '30%', boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <ItemAddForm />
            </Box>
        </Drawer>
    );
}
