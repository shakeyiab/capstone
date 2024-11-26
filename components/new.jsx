import React, { useState, useEffect } from 'react';
import axios from 'axios';

//created component to add api
const NewsComponent = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const apiKey = "5d0e670cf3a5431691bc4caa4dca967f";
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setArticles(data.articles || []);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // add Empty dependency array ensures this runs only once on mount.
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
          <h1>World News Headlines</h1>
          <ul>
            {articles.map((article, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <h2>{article.title}</h2>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ width: "100%", maxHeight: "200px", objectFit: "contain",display:"inline-block" }}
                  />
                )}
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default NewsComponent;  