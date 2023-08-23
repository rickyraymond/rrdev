import React from 'react';
import { Box } from '@mui/material';

export default function Toggler({ darkMode, handleClick }) {
    return (
        <Box
            sx={{
                cursor: 'pointer',
                width: '60px',
                height: '34px',
                position: 'relative',
                display: 'inline-block',
                marginTop: '1rem',
                ":hover": {
                    transform: 'translateY(-3px)',
                    transition: 'all 250ms ease'
                },
                "& .slider": {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(128, 128, 128, 0.5)',
                    borderRadius: '34px',
                    transition: '0.4s',
                },
                "& .slider:before": {
                    content: '""',
                    position: 'absolute',
                    height: '26px',
                    width: '26px',
                    left: darkMode ? '30px' : '4px',
                    bottom: '4px',
                    backgroundColor: darkMode ? 'black' : 'white',
                    borderRadius: '50%',
                    transition: '0.4s',
                }
            }}
            onClick={handleClick}
        >
            <span className="slider" aria-label={darkMode ? "Full Moon" : "New Moon"} role="img"></span>
        </Box>
    );
}
