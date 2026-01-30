import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import addItem from '@/api/addItem';
import { Box } from '@mui/material';

export default function ItemAddForm({onAdded}: {onAdded?: (name: string) => void}) {
    const [name, setName] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const value = name.trim();
        if (!value)
            return;

        setIsAdding(true);
        await addItem(value);
        setName('');
        setIsAdding(false);
        onAdded?.(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{px: 4}}>
                <Toolbar />
                <TextField
                    label="Neuen Artikel angeben"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Button
                    variant="contained" 
                    type="submit" 
                    loading={isAdding} 
                    disabled={!name} 
                    sx={{mt: 4}}
                >
                    Hinzufügen
                </Button>
            </Box>
        </form>
    );
}
