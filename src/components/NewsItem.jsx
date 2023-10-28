import React, { useState, useEffect } from "react";



function NewsItem({ offset, n }) {
  const [articles, setArticles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    const apiKey = "cc68e01925fa4ec6af57312ea47948b5";
    const endpoint = `https://newsapi.org/v2/everything?q=finance&apiKey=${apiKey}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          const limitedArticles = data.articles.slice(offset, offset + n);
          setArticles(limitedArticles);

          // Find the corresponding style for the current offset
          const styleObject = customStyles.find((style) => style.offset === offset);
          setCurrentStyle(styleObject || {}); // Set the style or an empty object
        } else {
          console.error("Error fetching news");
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, [offset, n]);

  const getTitle = () => {
    const titleObject = titleData.find((item) => item.offset === offset);
    return titleObject ? titleObject.title : "";
  };

  return (
    <div>
      {getTitle() && (
        <div style={{ textAlign: "center", fontSize: "1.4em" }}>
          <h1>{getTitle()}</h1>
        </div>
      )}

      <ul className="news-item-box">
        {articles.map((article, index) => (
          <li
            key={article.title}
            style={{
              ...currentStyle,
              textAlign: "center",
              fontSize: "0.5em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="news-object" style={currentStyle}>
              <div style={{ maxWidth: "33%" }}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img src={article.urlToImage} style={{ maxWidth: "150%", height: "auto" }} />
                </a>
              </div>
              <div style={{ maxWidth: "50%", textTransform: "none" }}>
                <h2 style={{
                  fontSize: "0.4em",
                  lineHeight: "95%",
                  marginBottom: "0px",
                }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: "0.2em", marginLeft: "2%", lineHeight: "109%" }}>
                  {article.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsItem;