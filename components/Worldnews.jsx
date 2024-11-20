
import React, { useState, useEffect } from "react";
import axios from "axios";

function Worldnews()  {
  

    const [message, setMessage] = useState('');
  
    useEffect(() => {
      // Send a GET request to the backend API
      axios.get('http://localhost:3000/api/message')
        .then(response => {
          setMessage(response.data.message); // Set the message received from the backend
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  
        
    }, []);
  
    return (
        <div>
        <h1>{message}</h1>
      </div>
  );
  }
   
  
  
  
  
       
  export default Worldnews;