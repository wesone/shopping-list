import { useMediaQuery, useTheme } from '@mui/material';
import ItemAddDrawer from './ItemAddDrawer';
import ItemAddDialog from './ItemAddDialog';

export default function ResponsiveItemAdder() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return matches
        ? <ItemAddDrawer />
        : <ItemAddDialog />;
}
