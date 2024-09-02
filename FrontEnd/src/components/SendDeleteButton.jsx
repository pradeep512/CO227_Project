import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function SendDeleteButton() {
    const [data, setData] = React.useState({
        key1: 'value1',
        key2: 'value2',
        // other key-value pairs
    });

    const handleSend = () => {
        // Convert data to JSON and create a Blob
        const jsonData = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Generate a unique filename based on a timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `data_file_${timestamp}.json`;

        // Create a link element, set the download attribute with a filename, and trigger a click to download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename; // Just the filename, no path
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(link.href);
    };

    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend}>
                Send
            </Button>
        </Stack>
    );
}
