import React from 'react';

const PredictionResult = () => {
    const containerStyle = {
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f0f4f8',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: '20px auto',
        fontFamily: 'Arial, sans-serif',
    };

    const headerStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
        color: '#333',
    };

    const sectionStyle = {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#555',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#fff',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>Prediction Result</div>
            <div style={sectionStyle}>Your past records</div>
            <div style={sectionStyle}>Your immediate result</div>
        </div>
    );
}

export default PredictionResult;