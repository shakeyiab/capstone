import React from 'react';
import { float } from 'webidl-conversions';
import HomeNews from './homenews';

function Home() {
    const styles = {
        container: {
        
          padding: '20px',
          textAlign: 'center',
        },
        heading: {
          color: 'darkblue',
          fontSize: '24px',
        }
       
      };
      const containerStyle = {
        display: 'flex', // Flex layout
        flexWrap: 'wrap', // Allow wrapping to the next row
        justifyContent: 'center', // Center images horizontally
        alignItems: 'center', // Align images vertically
        gap: '20px', // Space between items
        padding: '20px',
        backgroundColor: '#f9f9f9', // Optional background color
      };
    
      // Inline styles for the individual images
      const imageStyle = {
        width: '150px', // Set width of each image
        height: '150px', // Set height (optional, for square images)
        objectFit: 'cover', // Ensures proper scaling without distortion
        border: '1px solid #ccc',
        borderRadius: '8px', // Optional: Rounded corners
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Shadow effect
      }
  return (
    <div style={styles.container}>
    <h1 style={styles.heading}>Be The First To Recieve News!</h1>
    <p1>Sound journalism, grounded in facts never opinons</p1>
    <div style={containerStyle}>
      <img
        src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2017/11/best-news-apps-hero.jpg"
        alt="mobile news news on iphone"
        style={imageStyle}
      />
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2I5ZzA5dTlmb2k3M3hxeWIwcG1tZzZlMHVtcjRneWoxMGg0czBtMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eJjjScTD4itqIfw8Vh/giphy.gif"
        alt="image of world weather"
        style={imageStyle}
      />
      <img
        src="https://th.bing.com/th/id/OIP.EOhWSh6SZGNDVj7BydoZlgHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7"
        alt="magazines"
        style={imageStyle}
       
      />
     
    </div>
    <div> <p>Quickly Subscribe To Recieve News For As Low As $3.99 A Month! </p></div>

    <HomeNews />  </div>
    
  );
}

export default Home;