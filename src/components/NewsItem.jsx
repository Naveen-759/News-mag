import image from "../assets/news.jpg";
export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "180px", width: "280px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Immerse yourself in the world of current affairs with our news magazine, your ultimate source for insightful analysis, compelling stories, and up-to-the-minute updates on the latest events shaping our world."}
        </p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};
