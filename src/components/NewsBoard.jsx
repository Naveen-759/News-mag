import { useEffect } from "react";
import { useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [Articles, setArticles] = useState([]);
  console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "error") {
          console.log(data.message);
        } else {
          setArticles(data.articles);
        }
      });
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {Articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};
