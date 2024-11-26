import React from 'react';

function Subscribe()  {

  
    const containerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px', // Space between cards
      padding: '20px',
      backgroundColor: '#f4f4f4',
    };
  
    const cardStyle = {
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      backgroundColor: '#fff',
      textAlign: 'center',
    };
  
    const imageStyle = {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px 8px 0 0', // Round the top corners
    };
  
    const titleStyle = {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: '10px 0',
    };
  
    const descriptionStyle = {
      fontSize: '1rem',
      color: '#666',
      marginBottom: '16px',
    };
  
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007BFF',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };
  
    const cards = [
      { id: 1, title: 'Card 1', description: 'This is card 1', image: 'https://via.placeholder.com/300x200' },
      { id: 2, title: 'Card 2', description: 'This is card 2', image: 'https://via.placeholder.com/300x200' },
     
    ];
  
    return (
      <div style={containerStyle}>
        {cards.map((card) => (
          <div key={card.id} style={cardStyle}>
            <img src={card.image} alt={card.title} style={imageStyle} />
            <h2 style={titleStyle}>{card.title}</h2>
            <p style={descriptionStyle}>{card.description}</p>
            <button style={buttonStyle}>Read More</button>
          </div>
        ))}
      </div>
    );
  };
  

  
  
export default Subscribe;