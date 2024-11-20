import React from 'react';

function Home() {
    const styles = {
        container: {
          backgroundColor: 'lightblue',
          padding: '20px',
          textAlign: 'center',
        },
        heading: {
          color: 'darkblue',
          fontSize: '24px',
        }
       
      };

  return (
    <div style={styles.container}>
    <h1 style={styles.heading}>Be The First To Recieve News!</h1>
    <p1>Sound journalism, grounded in facts never opinons</p1>
  </div>
    
  );
}

export default Home;