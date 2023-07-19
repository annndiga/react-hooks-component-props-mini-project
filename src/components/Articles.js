import React from "react";

const Article = ({ title, date, preview, minutes }) => {
  const formattedDate = date || "January 1, 1970";
  const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
  const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <span>{minutes <= 30 ? coffeeCups : bentoBoxes} {minutes} min read</span>
    </article>
  );
};

export default Article;
