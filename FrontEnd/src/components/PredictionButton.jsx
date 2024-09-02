import React, { useState } from 'react';
import MachineLearningData from './MachineLearningData';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const PredictionButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <Button 
                className='predict-button' 
                style={{
                    backgroundColor: blue[800],
                    fontSize: '3rem',
                    color: 'white',
                    marginTop: '20px',
                    width: '100%',
                    height: '300px',
                    marginBottom: '20px',
                }} 
                onClick={handleClick}
            >
                Predict
            </Button>
            {showMenu && (
                <MachineLearningData />
            )}
        </div>
    );
};

export default PredictionButton;
