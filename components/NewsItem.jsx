import React, { useState, useEffect } from "react";

const titleData = [
  { offset: 5, title: "Fashion Trends" },
  { offset: 8, title: "Celebrity Styles" },
  { offset: 11, title: "Models" },
  { offset: 14, title: "Yearly Trends" },
  { offset: 18, title: "Social Media" },
  { offset: 22, title: "Styles" },
];

const customStyles = [
  { //page 1
    padding: "10px",
    maxWidth: "100%",
    position:"absolute",
    top:"30%",
    left:"65%",
    lineHeight:"100%",
    // transform:"translate(=50%,-50%)",
    fontSize:"2vh",
  },
  {
    padding: "10px",
    maxWidth: "100%",
    position:"absolute",
    top:"62%",
    left:"2%",
    lineHeight:"100%",
    // transform:"translate(=50%,-50%)",
    fontSize:"2.5vw",
  },
  {
    padding: "10px",
    // margin:"15px 40px",
    maxWidth: "100%",
    position:"absolute",
    top:"68%",
    left:"70%",
    transform:"translate(=50%,-50%)",
    fontSize:"2.5vh",
  },
  { //page 2
    padding: "10px",
    maxWidth: "100%",
    position:"absolute",
    top:"30%",
    left:"65%",
    lineHeight:"100%",
    // transform:"translate(=50%,-50%)",
    fontSize:"2vh",
  },
  {
    padding: "0px",
    maxWidth: "100%",
    position:"absolute",
    top:"59%",
    left:"-3%",
    lineHeight:"10%",
    // transform:"translate(=50%,-50%)",
    fontSize:"4vw",
  },
  {
    padding: "10px",
    // margin:"15px 40px",
    maxWidth: "100%",
    position:"absolute",
    top:"75%",
    left:"80%",
    lineHeight:"10%",
    transform:"translate(=50%,-50%)",
    fontSize:"1.5vh",
  },
  { //page 3
    padding: "10px",
    maxWidth: "100%",
    position:"absolute",
    top:"69%",
    left:"50%",
    lineHeight:"100%",
    // transform:"translate(=50%,-50%)",
    fontSize:"2.4vh",
  },
  {
    padding: "0px",
    maxWidth: "100%",
    position:"absolute",
    top:"10%",
    left:"-3%",
    lineHeight:"10%",
    // transform:"translate(=50%,-50%)",
    fontSize:"4vw",
  },
  {
    padding: "10px",
    // margin:"15px 40px",
    maxWidth: "100%",
    position:"absolute",
    top:"34%",
    left:"80%",
    lineHeight:"10%",
    transform:"translate(=50%,-50%)",
    fontSize:"1.5vh",
  },
  { //page 4 
      padding: "0px",
      maxWidth: "100%",
      position:"absolute",
      top:"14%",
      left:"-3%",
      lineHeight:"10%",
      // transform:"translate(=50%,-50%)",
      fontSize:"4vw",
    },
    {
      padding: "10px",
      // margin:"15px 40px",
      maxWidth: "100%",
      position:"absolute",
      top:"30%",
      left:"80%",
      lineHeight:"10%",
      transform:"translate(=50%,-50%)",
      fontSize:"1.5vh",
    },
    {
      padding: "0px",
      maxWidth: "100%",
      position:"absolute",
      top:"52%",
      left:"-3%",
      lineHeight:"10%",
      // transform:"translate(=50%,-50%)",
      fontSize:"4vw",
    },
    {
      padding: "10px",
      // margin:"15px 40px",
      maxWidth: "100%",
      position:"absolute",
      top:"70%",
      left:"80%",
      lineHeight:"10%",
      transform:"translate(=50%,-50%)",
      fontSize:"1.5vh",
    },
  { //page 5
    padding: "0px",
    maxWidth: "100%",
    position:"absolute",
    top:"14%",
    left:"-3%",
    lineHeight:"10%",
    // transform:"translate(=50%,-50%)",
    fontSize:"4vw",
  },
  {
    padding: "10px",
    // margin:"15px 40px",
    maxWidth: "100%",
    position:"absolute",
    top:"30%",
    left:"80%",
    lineHeight:"10%",
    transform:"translate(=50%,-50%)",
    fontSize:"1.5vh",
  },
  {
    padding: "0px",
    maxWidth: "100%",
    position:"absolute",
    top:"52%",
    left:"-3%",
    lineHeight:"10%",
    // transform:"translate(=50%,-50%)",
    fontSize:"4vw",
  },
  {
    padding: "10px",
    // margin:"15px 40px",
    maxWidth: "100%",
    position:"absolute",
    top:"70%",
    left:"80%",
    lineHeight:"10%",
    transform:"translate(=50%,-50%)",
    fontSize:"1.5vh",
  },
  { //page 6
    padding: "10px",
    maxWidth: "100%",
    position:"absolute",
    top:"15%",
    left:"5%",
    lineHeight:"10%",
    // transform:"translate(=50%,-50%)",
    fontSize:"8vh",
  },
  {
    padding: "0px",
    maxWidth: "100%",
    position:"absolute",
    top:"29%",
    left:"83%",
    lineHeight:"10%",
    // transform:"translate(=50%,-50%)",
    fontSize:"0.7vw",
  },
  {
    padding: "10px",
    // margin:"15px 40px",
    maxWidth: "100%",
    position:"absolute",
    top:"65%",
    left:"82%",
    lineHeight:"10%",
    transform:"translate(=50%,-50%)",
    fontSize:"1.2vh",
  },
];

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