import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import updateItem from '@/api/updateItem';
import removeItem from '@/api/removeItem';
import { Typography } from '@mui/material';

export type ShoppingItem = {
    id: string;
    name: string;
    bought: boolean;
    createdAt: string;
};

export default function Item({ id, name, bought, createdAt }: ShoppingItem) {
    const handleRemove = async () => {
        await removeItem(id);
    }

    const handleStatusChange = async () => {
        await updateItem(id, !bought);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="entfernen" onClick={handleRemove}>
                    <DeleteIcon titleAccess={`"${name}" entfernen`} />
                </IconButton>
            }
        >
            <ListItemIcon>
                <IconButton edge="end" aria-label="status" onClick={handleStatusChange}>
                    {
                        bought
                            ? <CheckIcon color="success" titleAccess="Als offen markieren" />
                            : <ShoppingCartIcon color="disabled" titleAccess="Als gekauft markieren" /> 
                    }
                </IconButton>
            </ListItemIcon>
            <ListItemText 
                primary={(
                    <Typography 
                        sx={{textDecoration: bought ? 'line-through' : 'none'}}
                    >
                        {name}
                    </Typography>
                )}
                secondary={new Date(createdAt).toLocaleString('de-DE', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            />
        </ListItem>
    );
}
