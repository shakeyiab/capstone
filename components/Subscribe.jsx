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
      { id: 1, title: 'Basic Plan', description: '$1/week For A Year', image: 'https://th.bing.com/th/id/OIP.AEP7ogG9e4QX5P74fKNHLQAAAA?rs=1&pid=ImgDetMain' },
      { id: 2, title: 'Plan Plus', description: '$1.75/week for 1 year', image: 'https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_1280.png' },
     
    ];
  
    return (
      <div ><h1>Choose Your Subscription</h1>
      <p1>Dont Forget To Checkout Our Paper Options</p1>
      <div style={containerStyle}>
       
        {cards.map((card) => (
          <div key={card.id} style={cardStyle}>
            <img src={card.image} alt={card.title} style={imageStyle} />
            <h2 style={titleStyle}>{card.title}</h2>
            <p style={descriptionStyle}>{card.description}</p>
            
            <p2><ul><li>
            Unlimited access to news articles, including audio articles</li>
              <li>Daily puzzles and crosswords</li>
              <li>Subscriber only audio and video content</li>
              </ul></p2>

              {card.id === 2 && (
            <p style={{  }}>
              <p2><ul><li>
              Exclusive Daily Discover newsletter with the stories that matter.</li>
              <li>Exclusive offers from The Journal Collection</li>
              <li>Investing tools and technical analysis.</li>
              <li> Real-time markets data and their impact.</li></ul></p2>
              
            </p>
          )}
            <button style={buttonStyle}>Suscribe Now</button>
          </div>
        ))}
      </div>
      </div>
    );
  };
  

  
  
export default Subscribe;