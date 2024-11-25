import React, { useState, useEffect } from 'react';
import axios from 'axios';



function HomeNews()
{
    const [articles, setArticles] = useState([]); // State to store articles
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors
  
    useEffect(() => {
      const apiKey = "5d0e670cf3a5431691bc4caa4dca967f";
      const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
  
      const fetchNews = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setArticles(data.articles || []); // Set the retrieved articles
        } catch (err) {
          setError(err.message); // Catch any errors
        } finally {
          setLoading(false); // End the loading state
        }
      };
  
      fetchNews();
    }, []); // Empty dependency array ensures the effect runs only once
  
    if (loading) return <p>Loading BBC News...</p>; // Loading message
    if (error) return <p>Error fetching news: {error}</p>; // Error message
  
    return (
      <div>
        <h1>BBC News Headlines</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <h2>{article.title}</h2>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
                />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read Full Article
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
    
  

    export default HomeNews;  