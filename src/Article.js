import React from 'react';
import blog1 from "./images/blog1.jpg"; 
import blog2 from "./images/blog2.jpg";
const Article = () => {
  return (
    <main>
      <div className="date">11/12/20</div>
      <h1>On the Street in Brooklyn</h1>
      <img src={blog1} alt="blog1" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa
        dolor neque quos dicta odio minus nobis, reprehenderit alias veritatis
        in animi iure libero iste esse corrupti minima nulla? Accusantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa
        dolor neque quos dicta odio minus nobis, reprehenderit alias veritatis
        in animi iure libero iste esse corrupti minima nulla? Accusantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa
        dolor neque quos dicta odio minus nobis, reprehenderit alias veritatis
        in animi iure libero iste esse corrupti minima nulla? Accusantium.
        <br />
        <span className="continue">Continue...</span>
      </p>
      <div>
        <hr className="horizontal-line" />
      </div>
      <div>
        <div className="date">11-11-20</div>
        <h1>On the Street in Brooklyn</h1>
        <img src={blog2} alt="blog1" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa
          dolor neque quos dicta odio minus nobis, reprehenderit alias
          veritatis in animi iure libero iste esse corrupti minima nulla?
          Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quasi ipsa dolor neque quos dicta odio minus nobis,
          reprehenderit alias veritatis in animi iure libero iste esse
          corrupti minima nulla? Accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quasi ipsa dolor neque quos dicta odio
          minus nobis, reprehenderit alias veritatis in animi iure libero iste
          esse corrupti minima nulla? Accusantium.
          <br />
          <span className="continue">Continue...</span>
        </p>
        <div>
          <hr className="horizontal-line" />
        </div>
      </div>
    </main>
  );
};

export default Article;